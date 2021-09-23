import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import { withRouter } from "react-router";

import Todo from "../../components/Todo/Todo";
import "./TodoList.css";

import { NavLink } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    storedTodos: state.td.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => dispatch(actionCreators.toggleTodo(id)),
    onDeleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)),
    onGetAll: () => dispatch(actionCreators.getTodos()),
  };
};
class TodoList extends Component {
  state = { selectedTodo: null };
  clickTodoHandler = (td) => {
    this.props.history.push("/todos/" + td.id);
  };

  componentDidMount() {
    this.props.onGetAll();
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
          clickDELETE={() => this.props.onDeleteTodo(td.id)}
        />
      );
    });

    return (
      <div className="TodoList">
        <div className="title">{this.props.title}</div>
        <div className="todos">{todos}</div>
        <NavLink to="/new-todo" exact>
          New Todo
        </NavLink>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TodoList));
