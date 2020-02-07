import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, Card, Button } from "reactstrap";
import React from "react";
import "./App.css";
import { login } from "./Services";
import {Redirect} from "react-router-dom"
import "./BTV/BtvStyle.scss"

class LoginForm extends React.Component {
  state = {
    userName: "",
    password: "",
    token : null
  };
  setLogin = () => (this.props.handler)
  sendData = () => {
    
    
    login(this.state.userName, this.state.password).then(result => {
      localStorage.setItem("JWT_TOKEN", result.token);
      console.log(localStorage)
    })
    .then(result => this.setState({token : localStorage.getItem("JWT_TOKEN")}))
    
    
  };

  onSubmit = (event) => {
    this.sendData();
    
    event.preventDefault()
    
    
    console.log(this.state);
  }
  


  render() {
    return !this.state.token ? (
      <Card>
        <CardBody>
          <form
            onSubmit={this.onSubmit}
            style={{ alignContent: "center", margin: "25" }}
          >
            <input
              type="text"
              value={this.state.userName}
              placeholder="Username"
              onChange={e => this.setState({ userName: e.target.value })}
              required={true}
            ></input>
            <input
              required={true}
              type="password"
              value={this.state.password}
              placeholder="********"
              onChange={e => this.setState({ password: e.target.value })}
            ></input>

            <Button type="submit">
              <h2>Login</h2>
            </Button>
          </form>
        </CardBody>
      </Card>
    )
    : 
    (
      <Redirect to = "/" /> 
    )
  }
}
export default LoginForm;
