import React, { Component } from 'react';
import {Button} from 'material-ui';

class NewView extends Component {
    render() {
        console.log("Props from New  View",this.props);
        return (
            <div>
                {/* <Button style={{marginTop: 30}}  variant='contained' color="primary" onClick={() => this.props.increase(1)}>Increase without Redux</Button> */}
            </div>
        );
    }
}

export default NewView;