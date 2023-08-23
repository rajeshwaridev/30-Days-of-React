import React, { useState } from 'react'

function HookCounter2() {
    const iCount=0;
    const [count,setCount]=useState(iCount)
    const increamentFive=()=>{
      for(let i=0;i<5;i++){
         setCount(prevCount=>prevCount+1);
      }
    }
  return (
    <div>
      Count:{count}
      <button onClick={()=>setCount(iCount)}>Reset</button>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Inrement</button>
      <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
      <button onClick={increamentFive}>increamentFive</button>
    </div>
  )
}

export default HookCounter2
