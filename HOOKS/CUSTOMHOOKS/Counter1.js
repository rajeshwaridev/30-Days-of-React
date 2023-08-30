import React,{useState} from 'react'
import useCounter from './useCounter'

function Counter1() {
    const [count,incrementCount,decrementCount,reset]=useCounter(0,1)
  return (
    <div>
        <h2>Count-{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter1
