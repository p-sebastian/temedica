import { useCallback, useEffect, useState } from 'react'
import { BehaviorSubject as Observable, catchError, debounceTime, from, ignoreElements, of, switchMap, tap } from 'rxjs'
import { TProduct } from 'src/types/TProduct'

import { api } from '../../utils/api.util'

type TStatus = { loading: boolean; error: null | string; skip: number; limit: number }
const useHome = () => {
  const [text, setText] = useState('')
  const [status, setStatus] = useState<TStatus>({ loading: false, error: null, skip: 0, limit: 10 })
  const [products, setProducts] = useState<TProduct[]>([])
  const [observable] = useState(new Observable(''))

  const mergeStatus = useCallback((s: Partial<TStatus>) => setStatus((x) => ({ ...x, ...s })), [])

  const onChangeText = useCallback(
    (v: string) => {
      setText(v)
      observable.next(v)
    },
    [observable],
  )

  useEffect(() => {
    const o = observable.pipe(
      debounceTime(500),
      tap(() => mergeStatus({ loading: true, error: null, skip: 0, limit: 10 })),
      switchMap((q) => from(api.queryProducts({ q, skip: 0, limit: 10 }))),
      // tap((x) => console.info(x.data.data)),
      tap((x) => {
        setProducts([...x.data.data])
        mergeStatus({ loading: false, error: null, skip: x.data.data.length })
      }),
      catchError((error) => {
        mergeStatus({ loading: false, error })
        return of(0)
      }),
      ignoreElements(),
    )
    o.subscribe()
    // return observable.unsubscribe
  }, [observable])

  const onEndReached = useCallback(() => {
    const { skip, limit, loading } = status
    if (loading) {
      return
    }
    const doIt = async () => {
      mergeStatus({ loading: true })
      const { data } = await api.queryProducts({ q: text, limit, skip })
      setProducts((x) => [...x, ...data.data])
      mergeStatus({ loading: false, skip: products.length + data.data.length })
    }
    doIt().then()
  }, [text, status, products])

  return { observable, onChangeText, text, onEndReached, products, status }
}

export const HomeHooks = { useHome }
