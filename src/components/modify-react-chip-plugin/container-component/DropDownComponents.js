import React, { Component } from 'react';
import Chips from '../modified-components/Chip'

class DropDownComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chips: []
        }
        this.onChange= this.onChange.bind(this);
    }
    onChange(chips) {
        this.setState({ chips });
      }
    render() {
        return(
            <div>
                <Chips 
                    value={this.state.chips}
                    onChange={this.onChange}
                    suggestions={["Your", "Data", "Here"]}
                />
            </div>
        )
    }
}  

export default DropDownComp;