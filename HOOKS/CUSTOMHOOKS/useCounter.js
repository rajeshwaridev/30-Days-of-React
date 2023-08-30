import {useState} from 'react'

function useCounter(initialState=0,value) {
    const [count,setCount]=useState(initialState)
    const incrementCount=()=>{
        setCount(prevState=>
            prevState+value
        )
    }
    const decrementCount=()=>{
        setCount(prevState=>
             prevState-value
        )
    }
    const reset=()=>{
        setCount(initialState)
    }
    return [count,incrementCount,decrementCount,reset]
}

export default useCounter
