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


function COMPONENTD() {
  const countConst=useContext(CountState)
  return (
    <div>
      COMPONENTD {countConst.countState}
       <button onClick={()=>countConst.countDispatch('increment')}>Increment</button>
       
      <button onClick={()=>countConst.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countConst.countDispatch('reset')}>Reset</button> 
    </div>
  )
}

export default COMPONENTD

