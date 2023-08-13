import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['RAJ', 'BALA', 'PRAVEEN', 'JAGAN']
  const persons = [
    {
      id: 1,
      name: 'RAJ',
      age: 20,
      skill: 'React'
    },
    {
      id: 2,
      name: 'BALA',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'PRAVEEN',
      age: 28,
      skill: 'JAVA'
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person} />)
//   const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  //const personList=persons.map(person=><Person person={person}/>)
  return <div>{personList}</div>
}

export default NameList