import React from "react";
import Form from "react-jsonschema-form";
var xml2js = require('xml2js')
// const uiSchema = {
//   "ui:order": ["*", "metadataSet"]
// };

const schema = {
  title: "CMSData",
  type: "object",
  properties: {
    cmsData: {
      type: "object",
      properties: {
        xmlns: {
          type: "string",
          title: "xmlns",
          default: "nis.cim.sp.ml.nagra.com"
        },
        "xmlns:xsi": {
          type: "string",
          title: "xmlns:xsi",
          default: "http://www.w3.org/2001/XMLSchema-instance"
        },
        executionDate: {
          type: "string",
          format: "date-time",
          title: "Execution Date",
          default: "2019-06-24T16:08:53Z"
        },
        "xsi:schemaLocation": {
          type: "string",
          title: "Schema Location",
          default: "Nagravision-Import-Full-Specification-v5.x.xsd"
        },
        editorialContent: {
          type: "object",
          title: "Editorial Content",
          properties: {
            providerResourceId: {
              type: "string",
              title: "Provider Resource Id",
              default: "GT_DRM_021219_Test01"
            },
            name: {
              type: "string",
              title: "Name",
              default: "GT_DRM_021219_Test01"
            },
            providerId: {
              type: "string",
              title: "Provider ID",
              default: "Global"
            },
            contentType: {
              type: "string",
              title: "Content Type",
              default: "Movie"
            },
            profileIds: {
              type: "string",
              title: "Profile IDs",
              default: "Pivot_creation"
            },
            metadataSet: {
              type: "array",
              title: "Metadata Set",
              items: {
                type: "object",
                properties: {
                  locale: {
                    type: "string",
                    title: "locale",
                    default: "en_US"
                  },
                  metadata: {
                    type: "array",
                    title: "Metadata",
                    items: {
                      type: "object",
                      properties: {
                        key: {
                          type: "string",
                          title: "key",
                          default: "Title"
                        },
                        $t: {
                          type: "string",
                          title: "$t",
                          default: "Primer Turno"
                        }
                      }
                    }
                  }
                }
              }
            },
            period: {
              type: "object",
              title: "Period",
              properties: {
                start: {
                  type: "string",
                  format: "date-time",
                  title: "start",
                  default: "2019-11-25T00:00:00Z"
                },
                end: {
                  type: "string",
                  format: "date-time",
                  title: "end",
                  default: "2020-12-01T00:00:00Z"
                }
              }
            },
            referenceAsset: {
              type: "object",
              title: "Reference Asset",
              properties: {
                uri: {
                  type: "string",
                  title: "uri",
                  default: "GT_021219_TEST01_NEW.mp4"
                },
                type: {
                  type: "string",
                  title: "tipe",
                  default: "HD"
                },
                metadataSet: {
                  type: "object",
                  title: "Metadata Set",
                  properties: {
                    locale: {
                      type: "string",
                      title: "Locale",
                      default: "none"
                    },
                    metadata: {
                      type: "array",
                      title: "Metadata",
                      items: {
                        type: "object",
                        properties: {
                          key: {
                            type: "string",
                            title: "Key"
                          },
                          $t: {
                            type: "string",
                            title: "$t"
                          }
                        }
                      }
                    }
                  }
                },
                assetDeviceLocation: {
                  type: "object",
                  title: "Asset Device Location",
                  properties: {
                    relativePath: {
                      type: "string",
                      title: "Relative Path"
                    },
                    storageDeviceId: {
                      type: "string",
                      title: "Storage Device Id"
                    },
                    type: {
                      type: "string",
                      title: "Type",
                      default: "source"
                    }
                  }
                },
                images: {
                  type: "object",
                  title: "Images",
                  properties: {
                    image: {
                      type: "object",
                      title: "image",
                      properties: {
                        id: {
                          type: "string",
                          title: "ID",
                          default: "GT_DRM_021219_Test01_image1"
                        },
                        uri: {
                          type: "string",
                          title: "URI",
                          default:
                            "https://pbs.twimg.com/media/DoltLG1X4AAoPe7.jpg"
                        },
                        height: {
                          type: "number",
                          title: "height",
                          default: 1200
                        },
                        width: {
                          type: "number",
                          title: "width",
                          default: 801
                        },
                        aspect: {
                          type: "string",
                          title: "Aspect",
                          default: "16x9"
                        },
                        primary: {
                          type: "boolean",
                          title: "Primary",
                          default: true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        tecnicalContent: {
          type: "array",
          title: "Tecnical Content",
          items: {
            type: "object",
            properties: {
              providerResourceId: {
                type: "string",
                title: "Provider Resource Id",
                default: "GT_DRM_021219_Test01_Tech2"
              },
              name: {
                type: "string",
                title: "name",
                default: "AllGoals 021219 GT Encrypted HLS"
              },
              providerId: {
                type: "string",
                title: "Provider ID",
                default: "Global"
              },
              profileId: {
                type: "string",
                title: "Profile ID",
                default: "package_creation_hls_drm"
              },
              metadataSet: {
                type: "array",
                title: "Metadata Set",
                items: {
                  type: "object",
                  properties: {
                    locale: {
                      type: "string",
                      title: "Locale",
                      default: "en_US"
                    },
                    metadata: {
                      type: "object",
                      title: "Metadata",
                      properties: {
                        key: {
                          type: "string",
                          title: "Key",
                          default: "Definition"
                        },
                        $t: {
                          type: "string",
                          title: "$t",
                          default: "HD"
                        }
                      }
                    }
                  }
                }
              },

              period: {
                type: "object",
                title: "Period",
                properties: {
                  start: {
                    type: "string",
                    title: "Start",
                    format: "date-time",
                    default: "2019-11-11T00:00:00Z"
                  },
                  stop: {
                    type: "string",
                    title: "Stop",
                    format: "date-time",
                    default: "2020-12-01T00:00:00Z"
                  }
                }
              },
              editorialContentRef: {
                type: "object",
                title: "Editorial Content Ref",
                properties: {
                  providerId: {
                    type: "string",
                    title: "ProviderId",
                    default: "GLOBAL"
                  },
                  providerResourceId: {
                    type: "string",
                    title: "Provider Resource Id",
                    default: "GT_DRM_021219_Test01"
                  }
                }
              },
              securityInfo: {
                type: "object",
                title: "Security Info",
                properties: {
                  id: {
                    type: "string",
                    title: "Id",
                    default: "GT_DRM_021219_Test01_HLS"
                  },
                  securityDeviceId: {
                    type: "string",
                    title: "Security Device Id",
                    default: "MCM"
                  },
                  $t: {
                    type: "string",
                    title: "$t",
                    default: ""
                  }
                }
              }
            }
          }
        },

        contentPublishingWindow: {
          type: "array",
          title: "Content Publishing Window",
          items: {
            type: "object",
            properties: {
              providerId: {
                type: "string",
                title: "Provider Id",
                default: "GLOBAL"
              },
              providerResourceId: {
                type: "string",
                title: "Provider Resource Id",
                default: "GT_DRM_021219_Test01_CPW2"
              },
              displayPriority: {
                type: "number",
                title: "Display Priority",
                default: 1
              },
              name: {
                type: "string",
                title: "Name",
                default: "AllGoals 021219 GT Encrypted CPW2"
              },
              publishToEndUser: {
                type: "boolean",
                title: "Publish To End User",
                default: true
              },
              type: {
                type: "string",
                title: "Type",
                default: "VOD"
              },
              period: {
                type: "object",
                title: "Period",
                properties: {
                  start: {
                    type: "string",
                    format: "date-time",
                    title: "Start",
                    default: "2019-11-11T00:00:00Z"
                  },
                  stop: {
                    type: "string",
                    format: "date-time",
                    title: "Stop",
                    default: "2020-12-01T00:00:00Z"
                  }
                }
              },
              technicalContentRef: {
                type: "object",
                title: "Technical Content Ref",
                properties: {
                  providerId: {
                    type: "string",
                    title: "Provider ID",
                    default: "GLOBAL"
                  },
                  providerResourceId: {
                    type: "string",
                    title: "Provider Resource Id",
                    default: "GT_DRM_021219_Test01_Tech2"
                  }
                }
              },
              nodeRef: {
                type: "object",
                title: "Node Ref",
                properties: {
                  providerId: {
                    type: "string",
                    title: "Provider ID",
                    default: "GLOBAL"
                  },
                  providerResourceId: {
                    type: "string",
                    title: "Provider Resource Id",
                    default: "NODE_1572535048925"
                  }
                }
              }
            }
          }
        },

        productLink: {
          type: "array",
          title: "Product Link",
          items: {
            type: "object",
            properties: {
              productRef: {
                type: "object",
                title: "Product Ref",
                properties: {
                  providerId: {
                    type: "string",
                    title: "Provider ID",
                    default: "MILLICOM"
                  },
                  providerResourceId: {
                    type: "string",
                    title: "Provider Resource ID",
                    default: "ANONYMOUS_FREE_PROD_VOD_GT"
                  }
                }
              },
              marketableRef: {
                type: "object",
                title: "Marketable Ref",
                properties: {
                  providerId: {
                    type: "string",
                    title: "Provider ID",
                    default: "Global"
                  },
                  providerResourceId: {
                    type: "string",
                    title: "GT_DRM_021219_Test01_CPW1",
                    default: "ANONYMOUS_FREE_PROD_VOD_GT"
                  },
                  type: {
                    type: "string",
                    title: "Type",
                    default: "contentPublishingWindow"
                  }
                }
              },
              validityPeriodSet: {
                type: "object",
                title: "Validity Period Set",
                properties: {
                  start: {
                    type: "string",
                    format: "date-time",
                    title: "Start",
                    default: "2019-11-11T00:00:00Z"
                  },
                  end: {
                    type: "string",
                    format: "date-time",
                    title: "end",
                    default: "2020-12-01T00:00:00Z"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export default class FormField extends React.Component {
  state = {
    data: {}
  };
  // jsonToXml = (formData) => {
  //     JSON.stringify(formData),

  // // }
  // componentDidUpdate() {
  //   this.state.data;
  // }
  formSubmission = ({ formData }, e) => {
    var temp = JSON.stringify(formData);
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(temp)
    console.dir(xml)
    // this.setState({data : temp})
    // console.log(this.state.data)
    // console.log(formData)
    // console.log(this.state.data)
  };

  render() {
    return (
      <Form
        schema={schema}
        // uiSchema = {uiSchema}
        formData={this.formData}
        onSubmit={this.formSubmission}
      />
    );
  }
}

// render((
//     <Form schema = {schema}
//     />
// ))
