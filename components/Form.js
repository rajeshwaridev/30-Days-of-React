import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    handleUsernameChange=(event)=>{
    this.setState({
        username:event.target.value
    })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
       alert('Welcome')
       event.preventDefault()

    }
    
  render() {
    const {email,comments,topic}=this.state
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <b><label>UserName</label></b>
       <input type='text' value={email} onChange={this.handleUsernameChange}/>
      </div>
      <div>
        <b><label>comments</label></b>
        <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
      </div>
      <div>
       <b> <lable>Topic</lable></b>
        <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='node'>node</option>
        </select>
      </div>
      <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
