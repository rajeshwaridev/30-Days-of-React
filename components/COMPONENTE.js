import React, { Component } from 'react'
import COMPONENTF from './COMPONENTF'
import UserContext, { UserConsumer } from '../UserContext'
 class COMPONENTE extends Component {
    static contextType=UserContext
  render() {
   return ( <div>
<COMPONENTF/>
<h1>COMPONENT E CONTEXT{this.context}</h1>
    </div>
    
    )
  }
}

export default COMPONENTE
