import React, { Component } from 'react';
import store from '../store/store';
import {Button} from 'material-ui';

class ExternalAccessofStore extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: false
        }
        this.refresh = this.refresh.bind(this);
    }

    refresh () {
        this.setState({
            data: !this.state.data
        })
    }
    render() {
       const state = store.getState();
        return (
            <div>
                {/* Access Store Externally: {state.increment.counter}
                <br/>
                <Button style={{marginTop: 30}} variant='contained' color='primary' onClick={this.refresh}>Refresh</Button> */}
            </div>
        );
    }
}

export default ExternalAccessofStore;