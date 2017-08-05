import React, { Component } from 'react'

class CreateTodo extends Component {

  state = {text: ''}

  handleChange(event){
    this.setState({text: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_TODO', todo: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Add To-Do </label>
            <input type='text' onChange={event => this.handleChange(event)} />
          </p>
          <input type='submit' value='Add' />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
