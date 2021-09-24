import React from 'react';

import './Todo.css';

const Todo = (props) => {
  return (
    <div className="Todo">
      <div className={`text ${props.done && 'done'}`} onClick={props.clickDetail}>
        {props.title}
      </div>
      {props.done && (<div className="done-mark">&#x2713;</div>)}
      <button onClick={props.clickDone}>{(props.done) ? 'Undone' : 'Done'}</button>
      <button onClick={props.clickDelete}>Delete</button>
    </div>
  );
}

// const reducer = (state = initialState, action) => {
//   switch (action.types) {
//     case actionTypes.DELETE_TODO:
//       const deleted = state.todos.filter((todo) => {
//         return todo.id !== action.targetID;
//       });
//       return { ...state, todos: deleted };
//     case actionTypes.TOGGLE_DONE:
//       const modified = state.todos.map((todo) => {
//         if (todo.id === action.targetID) {
//           return { ...todo, done: !todo.done };
//         } else {
//           return { ...todo };
//         }
//       });
//       return { ...state, todos: modified };
//   }
// }

export default Todo;