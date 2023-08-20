import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
import withCounter from './withCounter'

 class HoverCounter extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count:0
  //   }
  // }
  // incrementCount=()=>{
  //     this.setState(prevState=>{
  //         return {count:prevState.count+1}
  //     })
  // }
  render() {
    const {count,incrementCount}=this.props
    return <h1 onMouseOver={incrementCount}> Hoverd {count} times</h1>
      
  }
}

export default withCounter(HoverCounter,10)
