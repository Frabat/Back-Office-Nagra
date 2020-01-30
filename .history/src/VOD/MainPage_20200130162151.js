import React from "react";
import FormField from "./Form";
import Collapsible from "react-collapsible";
import { Card, Col, FormGroup } from "reactstrap";
export default class Main extends React.Component {
  state = {
    userName: "",
    data: {},
    token: null
  };
  componentDidMount() {
    localStorage.getItem("JWT_TOKEN")
      ? this.setState({
        userName: "Admin"
      })
      : this.setState({
        userName: null
      });
  }

  render() {
    console.log(this.state.userName);
    console.log(localStorage.getItem("JWT_TOKEN"));
    return (
      <div>
        <h1>Benvenuto {this.state.userName}</h1>
        <FormGroup>
          <Col style={{ borderColor: "black", borderwidth: "3%" }}>
            <Collapsible trigger="VOD FORM">
              <FormField
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapsible>
          </Col>
          <Card style={{ borderColor: "black", borderwidth: "3%" }}>
            <Collapsible trigger="VOD FORM">
              <FormField
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapsible>
          </Card>
          <Card>
            <Collapsible trigger="UPLOADED XML">
            </Collapsible>
          </Card>
        </FormGroup>
      </div>
    );
  }
}
