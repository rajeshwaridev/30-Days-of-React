import React,{useState} from 'react'
import { MemoizedChildTwo } from './ChildTwo'
// import {ChildOne} from './ChildOne'
// import { ChildOne } from './ChildOne'

const ParentTwo = ({children}) => {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('Raji')
    console.log("ParentTwo  Render")
  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>Count={count}</button>
      <button onClick={()=>setName('Consistency is the Key')}>Change Name</button>
      {/* <ChildOne/> */}
    <MemoizedChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo
