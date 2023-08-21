import React, { Component } from 'react'
import { UserConsumer } from '../UserContext'
 class COMPONENTF extends Component {
  render() {
    return (
      <div>
       COMPONENT F 
       <UserConsumer>
          {userName=>{
             return <div>Hello {userName}</div>
          }}
      </UserConsumer>
      </div>
    )
  }
}

export default COMPONENTF
