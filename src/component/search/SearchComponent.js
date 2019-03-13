import React, {Component} from 'react';
import TextField from '../TextField';
import axios from 'axios';

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                searchedPlanet: "",
                filteredPlanet: [],
                planentData: []
            }
        }
    }

    changePlanet = (event) => {
        let filteredPlanetOnType = [];
        filteredPlanetOnType = this.state.planentData ? this.props.data.filter(a=> {
            return(a.name === event.target.value )
        }): null
        this.setState({
            data: {
                ...this.state.data,
                filteredPlanet: filteredPlanetOnType,
                searchedPlanet: event.target.value
            }
        })
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/planets/').then(response => {
            this.setState({
                planentData: response.data.results
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        const {filteredPlanet} = this.state.data;
        console.log("state data <<<<<<<<<<<<<<<<<<<<<",this.state.planentData );

        return(
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <TextField
                        // ref={(element) => { this.fields.push(element); }}
                        name="searchedPlanet"
                        fullWidth
                        value={this.state.data.searchedPlanet}
                        hintText="Jupiter"
                        onChange={this.changePlanet}
                        floatingLabelText="Enter planet name"
                    />
                </div>
                {filteredPlanet != null &&
                    filteredPlanet.sort((a, b) => {
                        console.log("a & b", a,b);
                        var headeColumnA = a.population, headrColumnB = b.population
                        if (headeColumnA < headrColumnB) //sort list string in ascending order
                            return -1
                        if (headeColumnA > headrColumnB)
                            return 1
                        return 0 //default return value (no sorting)
                    }).forEach((element, index) => {
                    console.log("element data <<<<<<<<<<<<<<<<<<<<<",element );
                        <div style={{fontSize: ""+12+index+1+"px"}} >{element.population}</div>
                    })
                }
            </div>
        )
    }
}

export default SearchComponent;