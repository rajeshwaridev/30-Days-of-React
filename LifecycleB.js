import React, { Component } from 'react'

class LifecycleB extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Raji'
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('LifecycleB Render(should)')
    return true
}
componentDidUpdate(){
    console.log('Lifecycle B component did update')
}
getSnapshotBeforeUpdate(){
    console.log('Lifecycle B snapshot before update')
    return null
}
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB