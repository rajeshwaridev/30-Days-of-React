// import React, { Component } from 'react'
// import { UserConsumer } from '../UserContext'
//  class COMPONENTF extends Component {
//   render() {
//     return (
//       <div>
//        COMPONENT F 
//        <UserConsumer>
//           {userName=>{
//              return <div>Hello {userName}</div>
//           }}
//       </UserConsumer>
//       </div>
//     )
//   }
// }

// export default COMPONENTF
import React, { useContext, useReducer} from 'react'
import { CountState } from '../App'
import COMPONENTE from './COMPONENTE'

// export class COMPONENTD extends Component {
//   render() {
//     return (
//       <div>
//         <COMPONENTE/>
//       </div>
//     )
//   }
// }

// export default COMPONENTD
// import React from 'react'

function COMPONENTF() {
  const countConst=useContext(CountState)
  return (
    <div>
        COMPONENTF {countConst.countState}
       <button onClick={()=>countConst.countDispatch('increment')}>Increment</button>
       
      
      <button onClick={()=>countConst.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countConst.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default COMPONENTF


