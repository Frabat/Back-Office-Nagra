import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, Card, Button } from "reactstrap";
import React from "react";
import "./App.css";
import { login } from "./Services";

class LoginForm extends React.Component {
  state = {
    userName: "",
    password: ""
  };

  sendData = evt => {
    console.log("LOCAL STORAGE, ", localStorage);
    let temp = "";
    login(this.state.userName, this.state.password).then(result => {
      localStorage.setItem("JWT_TOKEN", result.token);
      console.log(localStorage);
    });
    evt.preventDefault();
  };
  // signOut() {
  //   localStorage.clear();
  // }
  render() {
    return (
      <Card>
        <CardBody>
          <form
            onSubmit={this.sendData}
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
    );
  }
}
export default LoginForm;
