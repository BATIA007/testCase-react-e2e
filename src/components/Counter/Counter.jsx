import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSelector } from '../../store/reducers/counter/selectors/selector'
import { decrement, increment } from '../../store/reducers/counter/counter'

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(counterSelector)

  return (
    <div>Counter
      <h2 data-testid='val'>{value}</h2>
      <div>
        <button data-testid='inc-btn' onClick={() => dispatch(increment())}>increment</button>
        <button data-testid='dec-btn' onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  )
}
