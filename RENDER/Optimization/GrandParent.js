import React,{useState} from 'react'
import ParentOne from './ParentOne'
import { Child } from '../ParentChild/Child'
import { ChildOne } from './ChildOne'

 export const GrandParent = () => {
    const [newCount,setNewCount]=useState(0)
    console.log("GrandParemt render")
  return (
    <div>
      <button onClick={()=>setNewCount(nc=>nc+1)}>GrandParent count-{newCount}</button>
      <ParentOne newCount={newCount}>
        <ChildOne/>
      </ParentOne>
    </div>
  )
}

export default GrandParent
