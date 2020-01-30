import React from "react";
import { login } from "./Services";
import {BrowserRouter as router, Link} from 'react-router-dom'
import "./App.css";


class LoginForm extends React.Component {
  state = {
    userName: "",
    password: ""
  };
  
  sendData = evt =>  {
    console.log("LOCAL STORAGE, ", localStorage);
    let temp = "";
    login(this.state.userName, this.state.password).then(result => {
      localStorage.setItem("JWT_TOKEN", result.token);
      console.log(localStorage);
    });
    evt.preventDefault();
    
  }
  // signOut() {
  //   localStorage.clear();
  // }
  render() {
    return  (
      <div>
        <form onSubmit={this.sendData}>
          <input
            type="text"
            value={this.state.userName}
            placeholder="Username"
            onChange={e => this.setState({userName : e.target.value})}
            required={true}
          ></input>
          <input
            required={true}
            type="password"
            value={this.state.password}
            placeholder="********"
            onChange={e => this.setState({password : e.target.value})}
          ></input>

          <button type="submit">
            <h2>Login</h2>
          </button>
        </form>
      </div>
    ) 
  }
}
export default LoginForm