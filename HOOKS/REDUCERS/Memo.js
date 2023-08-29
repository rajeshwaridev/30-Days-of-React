import React,{useMemo, useState} from 'react'

function Memo() {
    const[CounterOne,setCounterOne]=useState(0)
    const[CounterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(CounterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(CounterTwo+1)
    }
   const isEven= useMemo(()=>{
    let i=0
    while(i<2000000000) i++
   return CounterOne%2===0
},[CounterOne])
  return (
    <div>
    <div>
      <button onClick={incrementOne}>IncrementOne-{CounterOne}</button>
      <span>{isEven?'even':'odd'}</span>
    </div>
      <div>
        <button onClick={incrementTwo}>incrementTwo-{CounterTwo}</button>
    </div>
    </div>
  )
}

export default Memo
