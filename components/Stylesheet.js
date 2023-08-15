import React from 'react'
import './myStyle.css'
function Stylesheet(props) {
    let className=props.primary?'primary':''
  return (
    <div>
      <h1 class={className}>Stylesheet</h1>
      {/* /<h1 class={'${className} font-xl'}>Stylesheet</h1> */}
    </div>
  )
}

export default Stylesheet
