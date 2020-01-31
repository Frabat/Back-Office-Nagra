import React from "react";
import VodForm from "./Form";
import Collapsible from "react-collapsible";
import { Card, Col, FormGroup, Row, Button, Collapse, Nav, NavItem, NavLink, Navbar } from "reactstrap";
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
        <Navbar style={{ justifyContent: 'space-between', backgroundColor: "#6E918C" }}>
          <Nav style={{ justifyContent: 'space-around', backgroundColor: "#6E918C", color: "#F5FFFD" }}>
            <NavItem>
              <NavLink onClick={this.toggleVod}>Vod Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.toggleBtv}>Btv Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Uploaded XML</NavLink>
            </NavItem>
          </Nav>
          <Nav style={{ justifyContent: 'space-between', backgroundColor: "#6E918C" }}>
            <Nav style={{ flexDirection: 'row' }}>
              <NavItem style={{ color: "#F5FFFD" }}>
                <NavLink onClick={this.clearStorage}>Log-in</NavLink>
              </NavItem>
              <NavItem style={{ color: "#F5FFFD" }}>
                <NavLink onClick={this.clearStorage}>Sign-out</NavLink>
              </NavItem>
            </Nav>
          </Nav>
        </Navbar>
        <Row style={{ borderColor: "hrey", borderwidth: "3%" }}>
          <Col >
            <Collapse isOpen={this.state.openVod}>
              <VodForm
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapse>
            <Collapse isOpen={this.state.openBtv}>
              <BtvForm
                onsubmit={this.formSubmission}
                token={localStorage.getItem("JWT_TOKEN")}
              />
            </Collapse>
          </Col>
          {/* <Col >
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
          </Col> */}
        </Row>
      </div >
    );
  }
}
