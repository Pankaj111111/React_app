import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import store from '../store/store';
// import MainContainer from "./MainContainer";
import ExternalAccessofStore from '../component/ExternalAccessofStore';
import SearchComponent from "../component/search/SearchComponent";
import Login from "../component/login/Login";
import BindActionCreatorComponent from '../component/BindActionCreatorComponent';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div className='container m-t-10'>
                        <Provider store={store}>
                        <BrowserRouter> 
                                <Switch>
                                    <Route path="/" component={Login} exact />
                                    <Route path="/login" component={Login} />
                                    <Route path="/search" component={SearchComponent} />
                                    <Route path="/bind" component={BindActionCreatorComponent} />
                                </Switch>
                            </BrowserRouter>
                        </Provider>
                        <ExternalAccessofStore />
                    </div>
            </MuiThemeProvider>
        );
    }
}

module.exports = App;