import React from "react";
import { message } from "../Services";

class Xml extends React.Component {
  state = {
    data: [],
    token : this.props
  };
  componentDidMount() {
    this.xmlRetrieve();
  }
  xmlRetrieve = () => {
    
    console.log(this.state.data)
    message(this.state.data).then(
      result => this.setState({data : result})
    )

  };
  render() {
    
    return (
      <h5>Prova</h5>
    )
  }
}
export default Xml;
