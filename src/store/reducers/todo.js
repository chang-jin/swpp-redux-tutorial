import * as actionTypes from '../actions/actionType';
const initialState = {
 todos: [
     { id: 1, title: 'SWPP', content: 'take swpp class', done: true},
     { id: 2, title: 'Movie', content: 'watch movie', done: false},
     { id: 3, title: 'Dinner', content: 'eat dinner', done: false},
 ], selectedTodo: null
};
const reducer = (state = initialState, action) => {
    switch (action.type){
        caase actionTypes.ADD_TODO:
            const newTodo = {
                id: state.todos.length +1,
                title: action.title,
                content: action.content,
                done:false

            }
            return{...state, todos: [...state.todos, newTodo]};

        default:
            return state;
    }
 // at next page
}
export default reducer;