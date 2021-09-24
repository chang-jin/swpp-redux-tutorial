import { render } from "react-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        selectedTodo: state.td.selectedTodo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTodo: id =>
        dispatch({ type: actionTypes.GET_TODO, targetID: id }),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(RealDetail);