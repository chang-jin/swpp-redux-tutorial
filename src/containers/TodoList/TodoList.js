import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// import * as actionTypes from '../../store/action/actionType';
import * as actionCreators from '../../store/action';
import Todo from '../../components/Todo/Todo';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import './TodoList.css';

import { NavLink } from 'react-router-dom';

class TodoList extends Component {
  state = {
    selectedTodo: null,
  }

  componentDidMount() {
    this.props.onGetAll();
  }

  clickTodoHandler = (td) => {
    this.props.history.push(this.props.match.url + '/' + td.id);
  }

  render() {
    const todos = this.props.storedTodos.map((td) => {
      return (
        <Todo
          key={td.id}
          title={td.title}
          done={td.done}
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

const mapStateToProps = (state) => ({
  storedTodos: state.td.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)),
  onToggleTodo: (id) => dispatch(actionCreators.toggleTodo(id)),
  onGetAll: () => dispatch(actionCreators.getTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoList));
