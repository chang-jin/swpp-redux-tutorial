import React from 'react';

import './RealDetail.css';
import {connect}from 'react-redux';
import * as actionCreators from '../../../store/action/index';

class RealDetail extends React.Component {

  componentDidMount() {
    this.props.onGetTodo(parseInt(this.props.match.params.id));
  }

  render() {
    let title = '';
    let content = '';

    if (this.props.selectedTodos){
      title = this.props.selectedTodos.title;
      content=this.props.selectedTodos.content;
    }
    return (
      < div className="RealDetail" >
        <div className="row">
          <div className="left">
            Name:
        </div>
          <div className="right">
            {title}
          </div>
        </div>

        <div className="row">
          <div className="left">
            Content:
        </div>
          <div className="right">
            {content}
          </div>
        </div>
      </div >
    );
  }
};

const mapStateToProps = state => {
  return {
    selectedTodos: state.td.selectedTodos,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onGetTodo : id =>
      dispatch (actionCreators.getTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RealDetail);