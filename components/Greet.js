import React from 'react'
//usage of props
const Greet=props => {
    console.log(props)
    return(
        <div>
            <h1>
                Hello {props.name} and {props.heroName}
            </h1>
            
        </div>
    )
}
//without Arrow function
/*function Greet(){
    return <h1>Hello Rajeshwari</h1>
}*/
//WITH ARROW FUNCTION
//const Greet=()=><h1>HELLO RAJESHWARI</h1>

export default Greet
