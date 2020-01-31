import React from "react";
import VodForm from "./Form";
import Collapsible from "react-collapsible";
import { Card, Col, FormGroup, Row, Button, Collapse } from "reactstrap";
import BtvForm from './../BTV/BtvForm';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


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
          <Row style={{ borderColor: "hrey", borderwidth: "3%" }}>
            <Col >
              <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
              <Collapse trigger="VOD FORM" >
                <VodForm
                  onsubmit={this.formSubmission}
                  token={localStorage.getItem("JWT_TOKEN")}
                />
              </Collapse>
            </Col>
            <Col >
              <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
              <Collapse trigger="BTV FORM">
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
