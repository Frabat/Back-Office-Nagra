import React from "react";
import Form from "react-jsonschema-form";
import schema from "./BtvSchema.json";
import "./BtvStyle.scss";
import { CardBody, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { upload } from "../Services";
var convert = require("xml-js");
var filesaver = require("file-saver");

export default class BtvForm extends React.Component {
  state = {
    jwtToken: this.props.token,
    data: {}
  };
  log = type => console.log.bind(console, type);

  CustomFieldTemplate = props => {
    const {
      id,
      classNames,
      label,
      help,
      description,
      errors,
      title,
      children,
      required
    } = props; //required
    let myClassNames = classNames;
    let myLabel = label;
    //let myfield = classNames
    return (
      <div className={myClassNames}>
        {/* to customize the borders */}
        {myLabel !== "editorialContent" &&
          myLabel !== "editorialChannel" &&
          myLabel !== "Image" &&
          myLabel !== "xsi:schemaLocation" &&
          myLabel !== "xmlns:xsi" &&
          myLabel !== "xmlns" &&
          myLabel !== "metadata" &&
          myLabel !== "CMS Data" &&
          myLabel !== "_attributes" &&
          myLabel !== "metadataSet" &&
          myLabel !== "event" &&
          myLabel !== "channelEvents" && (
            <label htmlFor={id} className={id}>
              {" "}
              {myLabel}{" "}
            </label>
          )}

        {description}
        {children}
        {errors}
        {help}
      </div>
    );
  };

  ObjectFieldTemplate = props => {
    return (
      <div>
        {/* template for object */}
        {props.title === "xsi:schemaLocation" ||
        props.title === "CMS Data" ||
        props.title === "Channel Events" ||
        props.title === "Period" ||
        props.title === "Time Shifting" ||
        props.title === "Editorial content ref." ||
        props.title === "metadataSet" ||
        props.title === "_attributes" ||
        props.title === "metadata" ||
        props.title === "editorialContent" ||
        props.title === "editorialChannel" ||
        props.title === "locale" ||
        props.title === "Image" ? (
          <>
            {props.description}
            {props.properties.map((element, index) => (
              <div key={index}>
                <div style={{ margin: "10px" }} className="property-wrapper">
                  {element.content}
                </div>
              </div>
            ))}
          </>
        ) : (
          <Card>
            <CardBody>
              <div className="text-right boxIndex">
                <div
                  className="collassableContent text-left"
                  id={"box_" + props.title}
                >
                  <label className={props.id}> </label>
                  {props.description}
                  {props.properties.map((element, index) => (
                    <div key={index}>
                      <div
                        style={{ margin: "10px" }}
                        className="property-wrapper"
                      >
                        {element.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    );
  };

  uiSchema = {
    cmsData: {
      _attributes: {
        // "xsi:schemaLocation": { classNames: "col-md-6  float-left" },
        // "xmlns:xsi": { classNames: "col-md-6 float-left" },
        // "xmlns": { classNames: "col-md-6 col float-left" },
        "xsi:schemaLocation": { "ui:widget": "hidden" },
        "xmlns:xsi": { "ui:widget": "hidden" },
        xmlns: { "ui:widget": "hidden" }
      }
    }
  };
  // onSubmit = ({ formData }, e) => {
  //     var options = { compact: true, ignoreComment: true, spaces: 4 };
  //     let temp = convert.json2xml(formData, options)
  //     console.dir(temp)

  // };

  formSubmission = ({ formData }, e) => {
    var options = { compact: true, ignoreComment: true, spaces: 4 };
    var temp = convert.js2xml(formData, options);
    console.dir(temp);
    this.setState({
      data: temp
    });
    console.log(localStorage.JWT_TOKEN);
    upload(this.state.jwtToken, temp);
    filesaver.saveAs(
      new Blob([new XMLSerializer().serializeToString(document)], {
        type: "application/xhtml+xml;charset=" + document.characterSet
      }),
      "BTV.xml"
    );
  };

  render() {
    return (
      <Form
        className="BTV"
        schema={schema}
        formData={this.formData}
        uiSchema={this.uiSchema}
        ObjectFieldTemplate={this.ObjectFieldTemplate}
        FieldTemplate={this.CustomFieldTemplate}
        onChange={this.log("changed")}
        onSubmit={this.formSubmission}
        onError={this.log("errors")}
      />
    );
  }
}
