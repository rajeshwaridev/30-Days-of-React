import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Lakshmi'
      }
      //this.greetParent=this.gerrtParent.bind(this)
    }
    greetParent(){
       // alert('Hello'+this.state.parentName)
        alert('hello ')
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
