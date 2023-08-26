// import React,{useContext} from 'react'
// import COMPONENTF from './COMPONENTF'
// import { UserContext,Channeltest } from '../App'
// function COMPONENTE() {
//  const user= useContext(UserContext)
//  const channel= useContext(Channeltest)
//   return (
//     <div>
//       {user} - {channel}
//     </div>
//   )
// }

// export default COMPONENTE
import React, { useContext, useReducer} from 'react'
import { CountState } from '../App'
// import COMPONENTE from './COMPONENTE'

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

function COMPONENTE() {
  const countConst=useContext(CountState)
  return (
    <div>
       COMPONENTE {countConst.countState}
       <button onClick={()=>countConst.countDispatch('increment')}>Increment</button>
       
      <button onClick={()=>countConst.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countConst.countDispatch('reset')}>Reset</button> 
    </div>
  )
}

export default COMPONENTE


