import React,{useState} from 'react'
import useInput from './useInput'

function UserForm() {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Hello ${ffirstName} ${llastName}`)
        resetFirstName()
        resetLastName()
    }
    const [ ffirstName,bindFirstName,resetFirstName]=useInput('')
    const [ llastName,bindLastName,resetLastName]=useInput('')
  return (
    <div>
        <form onSubmit={submitHandler}>
           <div> <label>First Name</label>
      
      <label>First Name Name</label>
      <input type="text" {...bindFirstName} /></div>
      <div><label>Last Name</label>
      <input type="text" value={lastName} {...bindLastName} /></div>
      <button >Submit</button>
      </form>
    </div>
  )
}

export default UserForm
