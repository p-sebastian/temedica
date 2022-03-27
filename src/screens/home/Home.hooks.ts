import { useCallback, useEffect, useState } from 'react'
import {
  BehaviorSubject as Observable,
  catchError,
  debounceTime,
  from,
  ignoreElements,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs'
import { TProduct } from 'src/types/TProduct'

import { api } from '../../utils/api.util'

type TStatus = { loading: boolean; error: null | string; skip: number; limit: number; count: number }
const useHome = () => {
  const [text, setText] = useState('')
  const [status, setStatus] = useState<TStatus>({ loading: false, error: null, skip: 0, limit: 10, count: 0 })
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

  const onEndReached = useCallback(() => {
    const { skip, limit, loading } = status
    if (loading) {
      return
    }
    const doIt = async () => {
      mergeStatus({ loading: true })
      const { data } = await api.queryProducts({ q: text, limit, skip })
      const { products: p, count } = data.data
      setProducts((x) => [...x, ...p])
      mergeStatus({ loading: false, skip: products.length + p.length, count })
    }
    doIt().catch((error) => mergeStatus({ loading: false, error }))
  }, [text, status, products])

  const onClear = useCallback(() => onChangeText(''), [])
  const refetch = useCallback(() => onChangeText(text), [text])

  useEffect(() => {
    const o = observable.pipe(
      debounceTime(500),
      tap(() => mergeStatus({ loading: true, error: null, skip: 0, limit: 10 })),
      switchMap((q) =>
        from(api.queryProducts({ q, skip: 0, limit: 10 })).pipe(
          tap((x) => {
            if (x.status !== 200) {
              throw new Error('Invalid')
            }
          }),
          map((x) => ({ ...x.data.data, error: null })),
          catchError((error) => of({ products: [], count: 0, error: error?.message ?? 'Server Error' })),
        ),
      ),
      tap((x) => {
        const { products: p, count, error } = x
        setProducts([...p])
        mergeStatus({ loading: false, error, skip: p.length, count })
      }),
      ignoreElements(),
    )
    o.subscribe()
    return observable.unsubscribe
  }, [observable])

  return { onChangeText, text, onEndReached, products, status, onClear, refetch }
}

export const HomeHooks = { useHome }
