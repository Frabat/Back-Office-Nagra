import React from "react";
import Form from "react-jsonschema-form";
import schema from "./schemaVod.json";
import { upload } from '../Services';
import "../BTV/BtvStyle.scss"
import { CardBody, Card } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
var convert = require("xml-js");


const uiSchema = {
  "cmsData": {
    "ui:widget": "hidden",
    "_attributes": {
      "ui:widget": "hidden"
    }
  }
}
export default class VodForm extends React.Component {
  state = {
    data: {},
    jwtToken: this.props.token
  };

  CustomFieldTemplate = (props) => {
    const { id, classNames, label, help, description, errors, title, children, required } = props; //required
    let myClassNames = classNames
    let myLabel = label
    //let myfield = classNames
    return (
      <div className={myClassNames} >
        {/* to customize the borders */}
        {myLabel !== "editorialContent" && myLabel !== "editorialChannel" && myLabel !== "Image"
          && myLabel !== "xsi:schemaLocation" && myLabel !== "xmlns:xsi" && myLabel !== "xmlns"
          && myLabel !== "metadata" && myLabel !== "CMS Data" && myLabel !== "_attributes"
          && myLabel !== "metadataSet" && myLabel !== "event" && myLabel !== "channelEvents"
          && <label htmlFor={id} className={id}> {myLabel}  </label>}

        {description}
        {children}
        {errors}
        {help}
      </div>
    );
  }

  ObjectFieldTemplate = (props) => {
    return (
      <div>
        {/* template for object */}
        {props.title === "xsi:schemaLocation" || props.title === "CMS Data" || props.title === "Channel Events" || props.title === "Period" || props.title === "Time Shifting" || props.title === "Editorial content ref."
          || props.title === "metadataSet" || props.title === "_attributes" || props.title === "metadata" || props.title === "editorialContent"
          || props.title === "editorialChannel" || props.title === "locale" || props.title === "Image" ?
          <>
            {props.description}
            {props.properties.map((element, index) =>
              <div key={index}>
                <div style={{ margin: '10px' }} className="property-wrapper">{element.content}</div>
              </div>
            )}
          </>
          :

          <Card>
            <CardBody>
              <div className="text-right boxIndex" >
                <div className="collassableContent text-left" id={"box_" + props.title}>
                  <label className={props.id}>  </label>
                  {props.description}
                  {props.properties.map((element, index) =>
                    <div key={index}>
                      <div style={{ margin: '10px' }} className="property-wrapper">{element.content}</div>
                    </div>
                  )}
                </div>

              </div>
            </CardBody>
          </Card>
        }
      </div>
    );
  }

  formSubmission = ({ formData }, e) => {
    var options = { compact: true, ignoreComment: true, spaces: 4 };
    var temp = convert.js2xml(formData, options);
    console.dir(temp);
    this.setState({
      data: temp
    });
    console.log(localStorage.JWT_TOKEN)
    upload(this.state.jwtToken, temp)

  };



  render() {

    return (

      <Form
        className="BTV"
        schema={schema}
        uiSchema={uiSchema}
        formData={this.formData}
        onSubmit={this.formSubmission}
      />

    );
  }
}

