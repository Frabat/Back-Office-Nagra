import React from "react";
import Form from "react-jsonschema-form";
import schema from "./schemaVod.json";
import { upload } from './Services';
// var xml2js = require("xml2js");
var convert = require("xml-js");


const uiSchema = {
  "cmsData" : {
    "ui:widget" : "hidden",
    "_attributes" : {
      "ui:widget" : "hidden"
    }
  }
}
export default class FormField extends React.Component {
  state = {
    data: {},
    jwtToken : this.props.token
  };
 
  formSubmission = ({ formData }, e) => {
    var options = { compact: true, ignoreComment: true, spaces: 4 };
    var temp = convert.js2xml(formData, options);
    console.dir(temp);
    this.setState ({
      data : temp
    });
    console.log(localStorage.JWT_TOKEN)
    upload(this.state.jwtToken, temp)
    
  };

  
  
  render() {
    
    return (
      
      <Form
        schema={schema}
        uiSchema = {uiSchema}
        formData={this.formData}
        onSubmit={this.formSubmission}
      />
      
    );
  }
}

