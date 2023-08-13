import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         LoggedIn : true
      }
    }
    
  render() {
   //2.ELEMENT VARIABLE APPRPACH
    let message
    if (this.state.LoggedIn){
        message=<div>WELCOME RAJI</div>
    }
else{
    message = <div>WELCOME GUEST</div>}
    return <div>{message}</div>
//3.TERNNARY CONDITIONING
// return(
//     this.state.LoggedIn?
//     <div>WELCOME RAJI</div>:
//     <div>WELCOME GUEST</div>

// )
//1.IF-ELSE CONDITIONING
    // if(this.state.LoggedIn){
    //     return <div>Welcome Raji</div>
    //     }
    // else{
    //     return(<div>Welcome guest</div>)} 
    // }
//     return (
//       <div>
//         <div>
//         WELCOME RAJI</div>
//       <div>
//         WELCOME GUEST</div>
//       </div>
//     )
//   }
//return(this.state.LoggedIn && <div>WELCOME RAJI</div>)
}
 }

export default UserGreeting
