import React, {Component} from 'react';
import TextField from '../TextField';
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
            error: "",
            errorType: ""
        }
    }

    canProceed = () => {
        let isValid = true;
        if (this.state.data == null) return false;
        if (this.state.data.username === undefined || this.state.data.username < 1) {
            this.setState({
                error: true,
                errorType: "username_empty"
              });
              return false;
        }
        if (this.state.data.password === undefined || this.state.data.password < 1) {
            this.setState({
                error: true,
                errorType: "password_empty"
              });
              return false;
        }
        for (let i=0; i<this.props.data.length-1;i++){
            console.log("userData >>>>>>",this.state.data.username);
            if(this.props.data[i].name != this.state.data.username && this.props.data[i].birth_year != this.state.data.password){
                this.setState({
                    error: true,
                    errorType: "wrong_credential"
                    });
                    isValid = false;
            }
        }
        this.fields.forEach((field) => {
            if (field != null) {
                const valid = field._validate();
                if (!valid) {
                    isValid = false;
                }
            }
        });
        if (isValid) {
            alert("success !");
        }
        
        return isValid;
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
                            errorText={this.state.error && this.state.errorType === "username_wrong" ? "user name is not correct":  null}
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
                            errorText={this.state.error && this.state.errorType === "password_wrong" ? "password is not correct":  null}
                        />
                    </div>
                    <div className="btn-login-container">
                        <FlatButton className="save-button" labelStyle={{color: "#fff", textTransform: "capitalize"}} label="Login" style={{borderRadius: "20px"}} primary={true} onClick={this.canProceed} />
                    </div>
                    {this.state.error && <span className="section-heading-error error-msg-style"> entered credentials are not correct</span> }
                </div>    
            </div>
        )
    }
}

export default LoginPresentation;