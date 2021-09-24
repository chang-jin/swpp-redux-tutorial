import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./NewTodo.css"
import * as actionTypes from "../../../store/actions/actionTypes";

class NewTodo extends Component {
    state = {
        title: "",
        content: "",
        submitted: false,
    }
    render() {
        if (this.state.submitted) {
            return <Redirect to="/todos" />
        }
        return (
            <div className="Newtodo">
                <h1>Add a Todo</h1>
                <label>Title</label>
                <input type="text" value={this.state.title}
                    onChange={event => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" type="text" value={this.state.content}
                    onChange={event => this.setState({ content: event.target.value })} />
                <button onClick={() => this.postTodoHandler()}>Submit</button>
            </div>
        );
    }
    postTodoHandler = () => {
        this.props.onStoreTodo(this.state.title, this.state.content);
        this.setState( {submitted: true} );
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onStoreTodo: (title, content) =>
            dispatch({ type: actionTypes.ADD_TODO, title: title, content: content })
    };
};
export default connect(null, mapDispatchToProps)(NewTodo);
