import React from "react";
import VodForm from "./Form";
import Collapsible from "react-collapsible";
import { Card, Col, FormGroup, Row, Button, Collapse } from "reactstrap";
import BtvForm from './../BTV/BtvForm';



export default class Main extends React.Component {
  state = {
    userName: "",
    data: {},
    token: null,
    isOpen: false,

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

  ////////////////////////////////////////



  ///////////////////////////////////////
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    console.log(this.state.userName);
    console.log(localStorage.getItem("JWT_TOKEN"));
    return (
      <div>
        <h1>Benvenuto {this.state.userName}</h1>
        <Row style={{ borderColor: "hrey", borderwidth: "3%" }}>
          <Col >
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={this.state.isOpen}>
              <VodForm
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapse>
          </Col>
          <Col >
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={isOpen}>
              <BtvForm
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapse>
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
