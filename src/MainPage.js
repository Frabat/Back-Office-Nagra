import React from "react";
import FormField from "./Form";
export default class Main extends React.Component {
  state = {
    userName: "",
    data : {}
  };
  componentDidMount() {
    localStorage.token
      ? this.setState({
          userName: "Admin"
        })
      : this.setState({
          userName: null
        });
  }

  render() {
    return (
      <div>
        <h1>Benvenuto {this.state.userName}</h1>
        <FormField onsubmit = {this.formSubmission}/>
      </div>
    );
  }
}
