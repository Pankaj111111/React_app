import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  state = {
    searchText: "",
    planets: [],
    relatedPlanet: [],
    selectedPlanet: ""
  };

  // for fetching the api
  componentDidMount() {
    fetch("https://swapi.co/api/planets/")
      .then(response => response.json())
      .then(planets => this.setState({ planets }));
  }
  // for hadling change
  handleChange = e => {
    const value = e.target.value;
    this.setState({ searchText: value });
    if (this.state.planets.results) {
      let filterPlanets = this.state.planets.results.filter(planet => {
        return planet.name.toLowerCase().includes(value.toLowerCase()) === true;
      });
      this.setState({ relatedPlanet: filterPlanets });
    }
  };

  // for handling submit
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      selectedPlanet: this.state.searchText,
      relatedPlanet: [],
      searchText: ""
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <p className="text-center animated">Please enter the planet name</p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control form-control-lg"
                placeholder="PLEASE   ENTER   THE   PLANET   NAME"
                onChange={this.handleChange}
                value={this.state.searchText}
              />
            </div>
            <ul>
              {this.state.relatedPlanet.map(planet => (
                <div>
                  <p className="list-options" key={planet.name}>{planet.name}</p>
                </div>
              ))}
            </ul>
            <button type="submit" className="btn btn-success btn-block btn-lg">
              Submit
            </button>
          </form>
          <div className="text-center selectedPlanet">
            {this.state.selectedPlanet !== "" && (
              <p>You submitted the planet {this.state.selectedPlanet}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
