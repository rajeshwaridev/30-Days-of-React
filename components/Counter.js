import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    Increament(){
        this.setState(
            {
                count: this.state.count+1
            },
            ()=>{
                console.log('callback',this.state.count)
            }
            
        )
        console.log(this.state.count)
    }
  render() {
    return (
      <div>
        <h1>COUNT-{this.state.count}</h1>
        <button onClick={()=>this.Increament()}>Increament</button>

      </div>
    )
  }
}

export default Counter
