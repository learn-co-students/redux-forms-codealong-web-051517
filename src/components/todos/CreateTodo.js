import React, { Component } from 'react'

class CreateTodo extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    let newTodo = {
                    type: 'ADD_TODO',
                    todo: event.target.todo.value
                   }
    this.props.store.dispatch(newTodo)
    console.log('here')
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input id="todo"type="text" />
          </p>
          <input type="submit" />
        </form>
        <div>
          <ul>
            {this.props.store.getState().todos.map((todo) => <li> {todo} </li>)}
          </ul>
        </div>
      </div>
    );
  }
};

export default CreateTodo;
