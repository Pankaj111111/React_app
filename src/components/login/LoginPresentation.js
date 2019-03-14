import React, {Component} from 'react';
import TextField from '../TextField';
import { withRouter } from 'react-router';
// import  { Redirect } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';

const styles = {
    underlineStyle: {
      borderColor: "#bababa",
    },
    floatingLabelStyle: {
      color: "black",
    },
    floatingLabelFocusStyle: {
      color: "black",
    },
    style: {
        width: "100%"
    }
  };

class LoginPresentation extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                username: "",
                password: ""
            },
            visited: {

            },
            error: null,
            errorType: null
        }
    }

    canProceed = (e) => {
    const username = this.state.data.username;
    const password = this.state.data.password;
    if (this.state.data.username === "" && this.state.data.password === "")
      this.setState({
        errorMessage: "Please enter values for USERNAME and BIRTHYEAR"
      });
    if (this.state.data.username === "" && this.state.data.password !== "")
      this.setState({ errorMessage: "Please enter user name" });
    if (this.setState.username !== "" && this.state.data.password === "")
      this.setState({ errorMessage: "Please enter birth year" });
    if (this.state.data.username !== "" && this.state.data.password !== "") {
      const user = this.props.data.find(
        character =>
          character.name === username && character.birth_year === password
      );
      if (user) {
        this.props.history.push("/search");
      } else {
        this.setState({
          errorMessage: "Please enter a valid user name and birth year"
        });
      }
    }
    }

    changeUsername = (event) => {
		this.setState({
			data: {
                ...this.state.data,
                username: event.target.value
            }
		});
    }
    changePassword = (event) => {
		this.setState({
			data: {
                ...this.state.data,
                password: event.target.value
            }
		});
    }

    render() {
        this.fields = [];
        console.log("state data <><><><><><", this.state);
        return(
            <div className="login-style card container">
                <p className="login-tittle">Login</p>
                <div className="login-field-layout">
                    <div>
                        <TextField
                            type="text"
                            ref={(element) => { this.fields.push(element); }}
                            required
                            name="username"
                            fullWidth
                            value={this.state.data.username}
                            onBlur={this.setVisited}
                            underlineStyle={styles.underlineStyle}
                            hintText="Luke Skywalker"
                            onChange={this.changeUsername}
                            floatingLabelText="Enter user name"
                            errorText={this.state.error && this.state.errorType === "username_empty" ? "user name empty" : null}
                            //errorText={this.state.error && this.state.errorType === "username_wrong" ? "user name is not correct":  null}
                        />
                    </div>
                    <div>
                        <TextField
                            type="password"
                            ref={(element) => { this.fields.push(element); }}
                            required
                            name="password"
                            fullWidth
                            value={this.state.data.password}
                            onBlur={this.setVisited}
                            underlineStyle={styles.underlineStyle}
                            hintText="19BBY"
                            onChange={this.changePassword}
                            floatingLabelText="Enter password"
                            errorText={this.state.error && this.state.errorType === "password_empty" ? "password empty" : null}
                            //errorText={this.state.error && this.state.errorType === "password_wrong" ? "password is not correct":  null}
                        />
                    </div>
                    <div className="btn-login-container">
                        <FlatButton className="save-button" labelStyle={{color: "#fff", textTransform: "capitalize"}} label="Login" style={{borderRadius: "20px"}} primary={true} onClick={this.canProceed} />
                    </div>
                    {/* {this.state.error && <span className="section-heading-error error-msg-style"> entered credentials are not correct</span> } */}
                    {this.state.errorMessage && <span className="section-heading-error error-msg-style"> {this.state.errorMessage}</span> }
                </div>    
            </div>
        )
    }
}

export default withRouter(LoginPresentation);