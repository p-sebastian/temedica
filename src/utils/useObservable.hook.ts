import { useState } from 'react'
import { BehaviorSubject as Observable } from 'rxjs'

export const useObservable = (value: string) => {
  const [observable] = useState(new Observable(value))

  return [observable, observable.next] as [typeof observable, typeof observable.next]
}
