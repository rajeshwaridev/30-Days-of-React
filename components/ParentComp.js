import React, { Component,PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './components/PureComp'

 class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'RAJI'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'RAJI'
            })
        },2000)
    }
    
  render() {
    console.log('**************Parent Component**********')
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp
