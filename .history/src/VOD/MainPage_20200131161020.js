import React from "react";
import VodForm from "./Form";
// import Collapsible from "react-collapsible";
import { Card, Col, FormGroup, Row, Button, Collapse, Nav, NavItem, NavLink, Navbar } from "reactstrap";
import BtvForm from './../BTV/BtvForm';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CssBaseline, Container } from "@material-ui/core";
import TabPanel from "./TabPanel";



export default class Main extends React.Component {
  state = {
    userName: "",
    data: {},
    token: null,
    openVod: false,
    openBtv: false,
    value: 0

  };

  // classes = useStyles();


  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
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





  a11yProps = (index) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

  toggleVod = () => this.setState({ openVod: !this.state.openVod });
  toggleBtv = () => this.setState({ openBtv: !this.state.openBtv });

  render() {
    console.log(this.state.userName);
    console.log(localStorage.getItem("JWT_TOKEN"));
    return (
      <div className={useStyle.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Item One" {...this.a11yProps(0)} />
            <Tab label="Item Two" {...this.a11yProps(1)} />
            <Tab label="Item Three" {...this.a11yProps(2)} />

          </Tabs>
        </AppBar>
        <TabPanel value={this.value} index={0}>
          Item One
</TabPanel>
        <TabPanel value={this.value} index={1}>
          Item Two
</TabPanel>
        <TabPanel value={this.value} index={2}>
          Item Three
</TabPanel>

      </div>
      // <div>
      //   <Navbar style={{ backgroundColor: "#6E918C" }}>
      //     <Nav>
      //       <h3 style={{ color: "#F5FFFD" }}>Benvenuto @User1 {this.state.userName}</h3>
      //     </Nav>
      //     <Nav style={{ justifyContent: 'space-around', backgroundColor: "#6E918C", color: "#F5FFFD" }}>
      //       <NavItem>
      //         <NavLink onClick={this.toggleVod}>Vod Form</NavLink>
      //       </NavItem>
      //       <NavItem>
      //         <NavLink onClick={this.toggleBtv}>Btv Form</NavLink>
      //       </NavItem>
      //       <NavItem>
      //         <NavLink >Uploaded XML</NavLink>
      //       </NavItem>
      //     </Nav>
      //     <Nav style={{ justifyContent: 'space-between', backgroundColor: "#6E918C" }}>
      //       <Nav style={{ flexDirection: 'row' }}>
      //         <NavItem style={{ color: "#F5FFFD" }}>
      //           <NavLink onClick={this.clearStorage}>Log-out</NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Nav>
      //   </Navbar>
      //   <Row style={{ borderColor: "hrey", borderwidth: "3%" }}>
      //     <Col >
      //       <Collapse isOpen={this.state.openVod}>
      //         <VodForm
      //           onsubmit={this.formSubmission}
      //           token={localStorage.getItem("JWT_TOKEN")}
      //         />
      //       </Collapse>
      //       <Collapse isOpen={this.state.openBtv}>
      //         <BtvForm
      //           onsubmit={this.formSubmission}
      //           token={localStorage.getItem("JWT_TOKEN")}
      //         />
      //       </Collapse>
      //     </Col>
      //     {/* <Col >
      //         <Collapse isOpen={this.state.openBtv}>
      //           <BtvForm
      //             onsubmit={this.formSubmission}
      //             token={localStorage.getItem("JWT_TOKEN")}
      //           />
      //         </Collapse>
      //       </Col>
      //       <Col>
      //         <Collapsible trigger="UPLOADED XML">
      //         </Collapsible>
      //       </Col> */}
      //   </Row>
      // </div >
    );
  }
}
