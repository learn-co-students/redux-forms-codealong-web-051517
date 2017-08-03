import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    
    this.state={text:''}
  }

  handleChange = (event) => {
    this.setState({
      text:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type:'ADD_TODO', todo: this.state})
  }

  render() {
    debugger
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add TODO </label>
            <input type='text' onChange={(event) => this.handleChange(event)} />
          </p>
            <input type='submit' />
        </form>
        <div>
          <ul>
            {this.props.store.getState().todos.map(x=>{return <li>{x}</li>})}
          </ul>
        </div>
      </div>
    )
  }
}

export default CreateTodo
