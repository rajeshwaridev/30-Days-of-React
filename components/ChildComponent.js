import React from 'react'

function ChildComponent(props) {
  return (
    <div>
     <button onClick={props.greetHandler}>create parent</button> 
    </div>
  )
}

export default ChildComponent
