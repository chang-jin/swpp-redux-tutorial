import * as actionTypes from '../action/actionType';

const initialState = {
  todos: [
    { id: 1, title: 'SWPP', content: 'take swpp class', done: true },
    { id: 2, title: 'Movie', content: 'watch movie', done: false },
    { id: 3, title: 'Dinner', content: 'eat dinner', done: false }
  ],
  selectedTodo: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        id: state.todos.length + 1,
        title: action.title,
        content: action.content,
        done: false
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case actionTypes.DELETE_TODO:
      const deleted = state.todos.filter(todo => todo.id !== action.targetID);
      return { ...state, todos: deleted };
    case actionTypes.TOGGLE_DONE:
      console.log(1)
      const modified = state.todos.map(todo => {
        return todo.id === action.targetID ? { ...todo, done: !todo.done } : { ...todo };
      });
      return { ...state, todos: modified };
    case actionTypes.GET_TODO:
      const target = state.todos.find(td => td.id === action.targetID);
      return { ...state, selectedTodo: target };
    default:
      return state;
  }
}

export default reducer;