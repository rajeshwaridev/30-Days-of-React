import React,{useState,useCallback} from 'react'
import Title from '../Component2.js/HOOKS/Title';
import Counts from '../Component2.js/HOOKS/REDUCERS/Counts';
import Button from '../Component2.js/HOOKS/REDUCERS/Button';

function Callbacks() {
    const [age,setAge]=useState(25)
    const [salary,setSalary]=useState(50000)
    const incrementSalary=useCallback(()=>{
      setSalary(salary+1000)
  },[salary])
    const incrementAge=useCallback(()=>{
      setAge(age+1)},[age])
    
  return (
    <div>
      <Title/>
      <Counts  text="Age" count={age}/>
      <Button handleClick={incrementAge}>INCREMENT AGE</Button>
      <Counts text="salary" count={salary}/>
      <Button handleClick={incrementSalary}>INCREMENT SALARY</Button>
    </div>
  )
}

export default Callbacks
