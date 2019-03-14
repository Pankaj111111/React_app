import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import Login from "./components/login/Login";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div >
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/search" component={Search} />
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
