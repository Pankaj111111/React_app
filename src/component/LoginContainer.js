import React, { Component } from 'react';
import {Button} from 'material-ui';
import {connect} from "react-redux";
import Login from "./login/Login";
import {increase,decrease} from "../actions";

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props);
        return (
            <div className='row'>
                <Login />
            </div>
        );
    }
}

const mapStateToProps = state => ({
	counter: state
});


const mapDispatchToProps = (dispatch, getState) =>({
    increment: () => { dispatch(increase(1)) },
    decrement: () => { dispatch(decrease(1))},
    reset: ()=>{dispatch({type:"RESET"})}
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);