import React, { Component } from 'react';

import Todo from '../../components/Todo/Todo';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import './TodoList.css';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionTypes from '../../store/action/actionTypes'
import * as actionCreators from '../../store/action/index';


const mapDispatchToProps = dispatch => {
  return {
    onDeleteTodo: (id) =>
      dispatch(actionCreators.deleteTodo(id)),
    onToggleTodo: (id) =>
      dispatch(actionCreators.toggleTodo(id)),
    onGetAll: () => dispatch(actionCreators.getTodos()),
  };
};

const mapStateToProps = state => {
  return {
    storedTodos: state.td.todos
  };
};

class TodoList extends Component {

  componentDidMount(){
    this.props.onGetAll();
  }

  state = {
    todos: [
      { id: 1, title: 'SWPP', content: 'take swpp class', done: true },
      { id: 2, title: 'Movie', content: 'watch movie', done: false },
      { id: 3, title: 'Dinner', content: 'eat dinner', done: false }
    ],
    selectedTodo: null,
  }

  clickTodoHandler = (td) => {
    this.props.history.push('/todos/' + td.id);
  }

  render() {
    const todos = this.props.storedTodos.map((td) => {
      return (
        <Todo
          key={td.id}
          title={td.title}
          done={td.done}
          clicked={() => this.clickTodoHandler(td)}
          clickDetail={() => this.clickTodoHandler(td)}
          clickDone={() => this.props.onToggleTodo(td.id)}
          clickDelete={() => this.props.onDeleteTodo(td.id)}
        />);
    });

    let todo = null;
    if (this.state.selectedTodo) {
      todo = <TodoDetail
        title={this.state.selectedTodo.title}
        content={this.state.selectedTodo.content}
      />
    }
    return (
      <div className="TodoList">
        <div className="title">{this.props.title}</div>
        <div className="todos">{todos}</div>
        {todo}
        <NavLink to='/new-todo' exact>New Todo</NavLink>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoList));