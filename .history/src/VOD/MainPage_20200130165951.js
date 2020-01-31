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
    openVod: false,
    openBtv: false


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


  toggleVod = () => this.setState({ openVod: !this.state.openVod });
  toggleBtv = () => this.setState({ openBtv: !this.state.openBtv });

  render() {
    console.log(this.state.userName);
    console.log(localStorage.getItem("JWT_TOKEN"));
    return (
      <div>
        <h1>Benvenuto {this.state.userName}</h1>
        <Row style={{ borderColor: "hrey", borderwidth: "3%" }}>
          <Col >
            <Button color="info" onClick={this.toggleVod} style={{ margin: '1rem' }}>Show VOD Form</Button>
            <Collapse isOpen={this.state.openVod}>
              <VodForm
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapse>
          </Col>
          <Col >
            <Button color="info" onClick={this.toggleBtv} style={{ margin: '1rem' }}>Show BTV Form</Button>
            <Collapse isOpen={this.state.openBtv}>
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
