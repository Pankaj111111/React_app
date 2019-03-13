import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const styles = {
	underlineStyle: {
	borderColor: "#bababa",
    }
};

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "",
            visited: false,
            data: props.value || "",
            errorText: props.errorText
        };

        this.validate = this.validate.bind(this);
        this._validate = this._validate.bind(this);
    }

    handleChange(event) {
        const errorText = this.validate(event.target.value);
        this.setState({data: event.target.value, visited: true, errorText});
        this.props.onChange(event);
    }

    componentDidUpdate(oldProps){
        const { value: newValue } = this.props;
        const { value: oldValue } = oldProps;

        if(newValue != oldValue){
            this.setState({
                data : newValue,
                errorText: this.validate(newValue)
            });
        }

    }

    _validate(data) {
        const errorText = this.validate(this.state.data);
        this.setState({errorText});
        return errorText == null;
    }
    validate(data) {
        const { required: isRequired, floatingLabelText: field, max, min, type } = this.props;
        const pattern = new RegExp(this.state.pattern);

            if (!data && isRequired) {
                return `${field} can not be empty`;
            }

            if (!data && !isRequired) {
                return null;
            }
            if (data == null && isRequired) {
                return `${field} can not be empty`;
            }

            if (this.props.type === "text") {
                if (data.length > 15) {
                        return `${field} can not be more than 15 characters`;
                }

                if (data.length < 3) {
                        return `${field} can not be less than 3 characters`;
                }
            }

            
			if (this.props.type === "password") {
                if (data.length > 15) {
                    return `${field} can not be more than 15 characters`;
                }

                if (data.length < 3) {
                    return `${field} can not be less than 3 characters`;
                }

            }

            if (!pattern.test(data)) {
                if (type === "text") {
                     return "invalid user name";
                }
				if (type === "password") {
					return "invalid password format";
                }
            }

            return null;
    }

    onBlur() {
        if (!this.state.visited) {
            const isRequired = this.props.required;
            const empty = this.props.autoFocus;
            const fieldText = this.props.floatingLabelText;
            this.setState({visited: true});
            if (!this.state.data) {
                if (isRequired || empty) {
                    this.setState({
                        errorText: `${fieldText} can not be empty`
                    }, () => false);
                }
            }
        }
    }

    getPattern(props) {
        const type = props.type;
        const textPattern = "^.+$";
        // const passwordStrength = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16}$)";
        const passwordStrength = "^[A-Z0-9]{5}(?:List)?$";
        let pattern;

        if (type === "password") {
			pattern = passwordStrength;
        } else {
            pattern = textPattern;
        }
        return pattern;
    }
    getType = (type) =>{
        if(type == "password_plain"){
            return "password";
        }
        return type;
    }

    componentWillMount() {
        this.setState({
            pattern: this.getPattern({...this.props})
        });
    }

    render() {
        const { required, floatingLabelText,type } = this.props;
        const label = required ? <span>{floatingLabelText}<span className="error-text">*</span></span>:<span>{floatingLabelText}</span>;
        return (
            <TextField
            value={this.state.data}
          
            {...this.props}
            type={this.getType(type)}
			floatingLabelText={label}
			className={this.props.disabled ? "input-disabled": ""}
            errorText={this.props.errorText || this.state.errorText}
            inputStyle={{ boxShadow: "none" }}
            onBlur={this.onBlur.bind(this)}
            onChange={this.handleChange.bind(this)}
            fullWidth
            underlineStyle={styles.underlineStyle}
            id={"textinput_" + ((this.props.name && this.props.name.replace(/\./g, '_')) ||  (this.props.floatingLabelText && this.props.floatingLabelText.replace(/\./g, '_')) || "unnamed")}/>
		);
    }
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    required: PropTypes.bool,
    negative: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired
};


export default Input;
