import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [
        { id: 1, title: 'SWPP', content: 'take swpp class', done: true },
        { id: 2, title: 'Movie', content: 'watch movie', done: false },
        { id: 3, title: 'Dinner', content: 'eat dinner', done: false }
    ], selectedTodo: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // we will handle actions via switch statement
        case actionTypes.ADD_TODO:
            // as React, do not mutate state directly, make new object
            const newTodo = {
                id: action.id, // temporary
                title: action.title, content: action.content, done:action.done
            }
            return {...state, todos: [...state.todos, newTodo]};

        case actionTypes.DELETE_TODO:
            const deleted = state.todos.filter(value => {
                return value.id !== action.targetID;
            })
            return {...state, todos: deleted}

        case actionTypes.TOGGLE_DONE:
            const modified = state.todos.map(value => {
                if (value.id === action.targetID) {
                    return {...value, done: !value.done};
                }
                else return {...value};
            })
            return {...state, todos: modified};

        case actionTypes.GET_TODO:
            return {...state, selectedTodo: action.target };

        case actionTypes.GET_ALL:
            return {...state, todos: action.todos };

        default:
            break;
    }
    return state;
};

export default reducer;