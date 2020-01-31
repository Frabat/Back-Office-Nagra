import React from "react";
import VodForm from "./Form";
import Collapsible from "react-collapsible";
import { Card, Col, FormGroup, Row, Button, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import BtvForm from './../BTV/BtvForm';
import { Form } from 'react-jsonschema-form';



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

  clearStorage() {
    localStorage.clear();
  }

  toggleVod = () => this.setState({ openVod: !this.state.openVod });
  toggleBtv = () => this.setState({ openBtv: !this.state.openBtv });

  render() {
    console.log(this.state.userName);
    console.log(localStorage.getItem("JWT_TOKEN"));
    return (
      <div>
        <Nav>
          <h1>Benvenuto {this.state.userName}</h1>
          <NavItem>
            <NavLink onClick={this.clearStorage}>Sign-out</NavLink>
          </NavItem>
        </Nav>

        <Nav style={{ justifyContent: 'space-around', backgroundColor: ' blue' }}>
          <NavItem>
            <NavLink onClick={this.toggleVod}>Vod Form</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.toggleBtv}>Btv Form</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Uploaded XML</NavLink>
          </NavItem>
        </Nav>
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
      </div >
    );
  }
}
