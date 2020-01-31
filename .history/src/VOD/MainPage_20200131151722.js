import React from "react";
import VodForm from "./Form";
// import Collapsible from "react-collapsible";
//import { Card, Col, FormGroup, Row, Button, Collapse, Nav, NavItem, NavLink, Navbar } from "reactstrap";
import BtvForm from './../BTV/BtvForm';
import { CssBaseline, Container } from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const classes = useStyles();
//const { sections, title } = props;

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
      <React.Fragment>
        <h4>im here</h4>
        <CssBaseline />
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Button size="small">Subscribe</Button>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Im here
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Button variant="outlined" size="small">
              Sign up
        </Button>
          </Toolbar>
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>

            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              title
              </Link>

          </Toolbar>
        </Container>
      </React.Fragment>
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
      //       <Collapse isOpen={this.state.openBtv}>
      //         <BtvForm
      //           onsubmit={this.formSubmission}
      //           token={localStorage.getItem("JWT_TOKEN")}
      //         />
      //       </Collapse>
      //     </Col>
      //     <Col>
      //       <Collapsible trigger="UPLOADED XML">
      //       </Collapsible>
      //     </Col> */}
      //   </Row>
      // </div >
    );
  }
}

// Header.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
// };