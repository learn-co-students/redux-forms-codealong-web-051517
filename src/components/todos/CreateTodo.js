import React, { Component } from 'react'

class CreateTodo extends Component {

 handleSubmit(event) {
   event.preventDefault();
   this.props.store.dispatch({
     type: 'ADD_TODO',
     todo: this.state,
   });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          
        </form>
      </div>
    )
  }
}

export default CreateTodo;
