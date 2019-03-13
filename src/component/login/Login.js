import React, {Component} from 'react';
import LoginPresentation from "./LoginPresentation";
import SerchComponent from "../search/SearchComponent";
import axios from 'axios';
import img from "../../assets/images/fwd-login-splash.jpg";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            peopleData: "",
            
        }
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people/').then(response => {
            this.setState({
                peopleData: response.data.results
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    render() {
        const {peopleData, planentData} = this.state;
        console.log("planet data <<<<", peopleData, planentData)
        return(
            <div>
                <div className="col-lg-12 image-style">
                    <img className="app-main full-width fix-header" src={img}/>
                </div>
                <div>
                    <LoginPresentation data={peopleData} />
                </div>
                    {/* <SerchComponent data={planentData}/> */}
            </div>
        )
    }
}

export default Login;