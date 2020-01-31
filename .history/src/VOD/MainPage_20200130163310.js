import React from "react";
import VodForm from "./Form";
import Collapsible from "react-collapsible";
import { Card, Col, FormGroup, Row } from "reactstrap";
import BtvForm from './../BTV/BtvForm';
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
        <Row >
          <Col style={{ borderColor: "black", borderwidth: "3%" }}>
            <Collapsible trigger="VOD FORM">
              <VodForm
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapsible>
          </Col>
          <Col style={{ borderColor: "black", borderwidth: "3%" }}>
            <Collapsible trigger="BTV FORM">
              <BtvForm
                style={{ marginTop: 300 }}
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapsible>
          </Col>
          <Col>
            <Collapsible trigger="UPLOADED XML">
            </Collapsible>
          </Col>
        </Row>
      </div>
    );
  }
}
