import React,{useState} from 'react'

const initState={
    fname:"Raji",
    lname:"Devi"
}


const ObjectUseState = () => {
  
    console.log("object render")
    const [person,setPerson]=useState(initState)
    const changeName=()=>{
        // person.fname="Coder"
        // person.lname="Developer"
        // setPerson(person)
        const newPerson={...person}
        newPerson.fname="Coder"
        newPerson.lname="Developer"
        setPerson(newPerson)

    }
  return (
    <div>
      <button onClick={changeName}>{person.fname}{person.lname}</button>
    </div>
  )
}

export default ObjectUseState
