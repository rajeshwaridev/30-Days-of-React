import React,{useState} from 'react'
import useCounter from './useCounter'

function Counter2() {
   const [count,incrementCount,decrementCount,reset]=useCounter(10,2)
  return (
    <div>
        <h2>Count-{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter2
