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
    
    
    // message(localStorage.getItem("JWT_TOKEN")).then(
    //   result => console.log("RISULTATO : ", result)
    // )

  };
  render() {
    
    return (
      <h5>Prova</h5>
    )
  }
}
export default Xml;
