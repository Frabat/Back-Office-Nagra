import React from "react";
import VodForm from "./Form";
// import Collapsible from "react-collapsible";
import { Card, Col, FormGroup, Row, Button, Collapse, Nav, NavItem, NavLink, Navbar } from "reactstrap";
import BtvForm from './../BTV/BtvForm';
// import { Form } from 'react-jsonschema-form';


var isVisibleVod = false
var isVisibleBtv = false
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

  toggleVod = () => {
    if (this.state.openVod === false) {
      isVisibleBtv = false;
      this.setState({ openVod: true })
    } else {
      isVisibleBtv = false;
      this.setState({ openVod: false })
    }
  };
  toggleBtv = () => {
    if (this.state.openBtv === false) {
      isVisibleVod = true;
      this.setState({ openBtv: true })
    } else {
      isVisibleVod = false;
      this.setState({ openBtv: false })
    }
  };

  render() {
    console.log(this.state.userName);
    console.log(localStorage.getItem("JWT_TOKEN"));
    return (
      <div>
        <Navbar style={{ backgroundColor: "#6E918C" }}>
          <Nav>
            <h3 style={{ color: "#F5FFFD" }}>Benvenuto @User1 {this.state.userName}</h3>
          </Nav>
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
                <NavLink onClick={this.clearStorage}>Log-out</NavLink>
              </NavItem>
            </Nav>
          </Nav>
        </Navbar>
        <Row style={{ borderColor: "hrey", borderwidth: "3%" }}>
          <Col >
            <Collapse isOpen={this.state.openVod}>
              {isVisibleVod &&
                <VodForm
                  onsubmit={this.formSubmission}
                  token={localStorage.getItem("JWT_TOKEN")}
                />}
            </Collapse>
            <Collapse isOpen={this.state.openBtv}>
              {isVisibleBtv &&
                <BtvForm
                  onsubmit={this.formSubmission}
                  token={localStorage.getItem("JWT_TOKEN")}
                />}
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
