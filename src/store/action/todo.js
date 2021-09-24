import axios from 'axios';
import { push } from 'connected-react-router';

import * as actionTypes from '../action/actionType';

export const getTodos_ = (todos) => ({ type: actionTypes.GET_ALL, todos });

export const getTodos = () => {
  return (dispatch) => {
    return axios.get('/api/todo/')
      .then((res) => dispatch(getTodos_(res.data)));
  };
};

export const postTodo_ = (td) => ({
  type: actionTypes.ADD_TODO,
  id: td.id,
  title: td.title,
  content: td.content,
});

export const postTodo = (td) => {
  return (dispatch) => {
    return axios.post('/api/todo/', td)
      .then((res) => dispatch(postTodo_(res.data)))
      .then(() => dispatch(push('/todos/')));
  };
};

export const deleteTodo_ = (id) => ({
  type: actionTypes.DELETE_TODO,
  targetID: id,
});

export const deleteTodo = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/todo/${id}/`)
      .then(() => dispatch(deleteTodo_(id)));
  };
};

export const toggleTodo_ = (id) => ({
  type: actionTypes.TOGGLE_DONE,
  targetID: id,
});

export const toggleTodo = (id) => {
  return (dispatch) => {
    return axios.put(`/api/todo/${id}/`)
      .then(() => dispatch(toggleTodo_(id)));
  };
};

export const getTodo_ = (todo) => ({
  type: actionTypes.GET_TODO,
  target: todo,
});

export const getTodo = (id) => {
  return (dispatch) => {
    return axios.get(`/api/todo/${id}/`)
      .then((res) => dispatch(getTodo_(res.data)));
  };
};
