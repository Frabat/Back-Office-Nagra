import React from "react";
import Form from "react-jsonschema-form";
import schema from "./schemaVod.json";
import { upload } from "../Services";
import "../BTV/BtvStyle.scss";
import { CardBody, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
var convert = require("xml-js");
var filesaver = require("file-saver");

const uiSchema = {
  cmsData: {
    "ui:widget": "hidden",
    _attributes: {
      "ui:widget": "hidden"
    }
  }
};
export default class VodForm extends React.Component {
  state = {
    data: {},
    jwtToken: this.props.token
  };

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
        {myLabel !== "CMSData" &&
          myLabel !== "_attributes" &&
          myLabel !== "Metadata Set" &&
          myLabel !== "Metadata" &&
          myLabel !== "Images" &&
          myLabel !== "Technical Content" &&
          myLabel !== "Product Link" &&
          myLabel !== "Content Publishing Window" &&
          myLabel !== "Validity Period Set" && (
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
        {props.title === "CMSData" || props.title === "_attributes" ? (
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
      new Blob([temp], { type: "text/plain;charset=utf-8" }),
      "VOD.xml"
    );
  };

  render() {
    return (
      <Form
        className="BTV"
        schema={schema}
        uiSchema={uiSchema}
        formData={this.formData}
        onSubmit={this.formSubmission}
        ObjectFieldTemplate={this.ObjectFieldTemplate}
        FieldTemplate={this.CustomFieldTemplate}
      />
    );
  }
}
