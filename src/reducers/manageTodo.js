//initialize with a default state of an empty array of todos

export default function manageTodo(state = {
  todos: [],
}, action) {

//define action to add an item to the array.
//action object includes text submitted from the form
//action type:
// 1. creates a copy of the previous state and
// 2. adds the object to the array of todos in the state

  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo.text) }

//otherwise the default action is to simply return the state
    default:
      return state;
  }
}
