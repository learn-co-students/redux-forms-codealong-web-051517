export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      state = {
        todos:[...state.todos, action.todo]
      }
      break;
      default:
      
  }
  return state;
}
