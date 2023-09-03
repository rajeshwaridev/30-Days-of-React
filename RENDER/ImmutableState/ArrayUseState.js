import React,{useState} from 'react'
const init=["Raji","Devi"]
const ArrayUseState = () => {
    const [persons,setPerson]=useState(init)
    const handleClick=()=>{
        // persons.push('coder')
        // persons.push('developer')
        // setPerson(persons)
        const newPerson=[...persons]
        newPerson.push("coder")
        newPerson.push("developer")
        setPerson(newPerson)
    }
    console.log('ARRAY USESTATE RENDER')
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
       persons.map(person=>(
        <div key={person}>{person}</div>


       ))
      }
    </div>
  )
}

export default ArrayUseState
