import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../../components/Todo/Todo';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import './TodoList.css';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as actionTypes from "../../store/actions/actionTypes";
import * as actionCreators from '../../store/actions/index';

class TodoList extends Component {

    componentDidMount() {
        this.props.onGetAll();
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
                clickDetail={() => this.clickTodoHandler(td)}
                clickDone={() => this.props.onToggleTodo(td.id)}
                clickDelete={() => this.props.onDeleteTodo(td.id)}
            />);
        });

        return (
            <div className="TodoList">
                <div className="title">{this.props.title}</div>
                <div className="todos">{todos}</div>
                <NavLink to='/new-todo' exact>New Todo</NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      storedTodos: state.td.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleTodo: (id) =>
            dispatch(actionCreators.toggleTodo(id)),
        onDeleteTodo: (id) =>
            dispatch(actionCreators.deleteTodo(id)),
        onGetAll: () => dispatch(actionCreators.getTodos()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoList));