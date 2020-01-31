import React from "react";
import VodForm from "./Form";
// import Collapsible from "react-collapsible";
import { Card, Col, FormGroup, Row, Button, Collapse, Nav, NavItem, NavLink, Navbar } from "reactstrap";
import BtvForm from './../BTV/BtvForm';
//import { Form } from 'react-jsonschema-form';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
//import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};
const classes = useStyles();

export default class MainPage extends React.Component {



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
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Blog" sections={sections} />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map(post => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="From the firehose" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
          </main>
        </Container>
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
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
