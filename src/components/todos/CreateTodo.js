import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

//this event captures the text property from the form input
//this value becomes part of the action object's state properties
  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

//this method uses the dispatch method to take the action object
//and pass it to the reducer manageTodo.
  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
            <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
