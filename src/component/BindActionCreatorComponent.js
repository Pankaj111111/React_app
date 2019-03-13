import React, { Component } from 'react';
import * as Actions from '../actions';
import {bindActionCreators} from 'redux';   
import {connect} from 'react-redux';
import NewView from './NewView';
console.log("Actions",Actions);
class BindActionCreatorComponent extends Component {
    constructor(props){
        super(props);
        const {dispatch} = this.props;
        console.log("props:: ", props);
        this.actions = bindActionCreators(Actions,dispatch);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <NewView {...this.actions} />
            </div>
        );
    }
}

export default connect()(BindActionCreatorComponent);