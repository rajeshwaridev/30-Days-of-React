import React, { Component } from 'react'
import LifecycleB from  './LifecycleB'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Raji'
      }
      console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
componentDidMount(){
    console.log('Lifecycle A componentDidMount')
}
shouldComponentUpdate(){
    console.log('LifecycleA Render(should)')
    return true
}
componentDidUpdate(){
    console.log('Lifecycle A component did update')
}
getSnapshotBeforeUpdate(){
    console.log('Lifecycle A snapshot before update')
    return null
}
changeState=()=>{
    this.setState({
        name:'REACTJS'
    })
}
    
  render() {
      console.log('LifecycleA')
      return (
        <div>
            <div>Lifecycle A</div> 
            <button onClick={this.changeState}>Change State</button>
      <LifecycleB/>
        </div>
      
      
      )
    
  }

}

export default LifecycleA
