import React from "react";
import Form from "react-jsonschema-form";
import {upload} from './Services'
// var xml2js = require("xml2js");
var convert = require("xml-js");

const schema = {
  title: "CMSData",
  type: "object",
  properties: {
    cmsData: {
      type: "object",
      title: "CMS DATA",
      properties: {
        _attributes: {
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
            }
          }
        },
        editorialContent: {
          type: "object",
          title: "Editorial Content",
          properties: {
            _attributes: {
              type: "object",
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
                }
              }
            },
            metadataSet: {
              type: "array",
              title: "Metadata Set",
              items: {
                type: "object",
                properties: {
                  _attributes: {
                    type: "object",
                    properties: {
                      locale: {
                        type: "string",
                        title: "locale",
                        default: "en_US"
                      }
                    }
                  },
                  metadata: {
                    type: "array",
                    title: "Metadata",
                    items: {
                      type: "object",
                      properties: {
                        _attributes: {
                          type: "object",
                          properties: {
                            key: {
                              type: "string",
                              title: "Key",
                              default: "Title"
                            }
                          }
                        },
                        _text: {
                          type: "string",
                          title: "Value",
                          default: "Title"
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
                _attributes: {
                  type: "object",
                  properties: {
                    start: {
                      type: "string",
                      format: "date-time",
                      default: "2019-11-25T00:00:00Z"
                    },
                    end: {
                      type: "string",
                      format: "date-time",
                      default: "2020-12-01T00:00:00Z"
                    }
                  }
                }
              }
            },
            referenceAsset: {
              type: "object",
              title: "Reference Asset",
              properties: {
                _attributes: {
                  type: "object",
                  properties: {
                    uri: {
                      type: "string",
                      title: "URI",
                      default: "GT_021219_TEST01_NEW.mp4"
                    },
                    type: {
                      type: "string",
                      title: "Type",
                      default: "HD"
                    }
                  }
                },
                metadataSet: {
                  type: "array",
                  title: "Metadata Set",
                  items: {
                    type: "object",
                    properties: {
                      _attributes: {
                        type: "object",
                        properties: {
                          locale: {
                            type: "string",
                            title: "locale",
                            default: "none"
                          }
                        }
                      },
                      metadata: {
                        type: "array",
                        title: "Metadata",
                        items: {
                          type: "object",
                          properties: {
                            _attributes: {
                              type: "object",
                              properties: {
                                key: {
                                  type: "string",
                                  title: "Key",
                                  default: "FileSize"
                                }
                              }
                            },
                            _text: {
                              type: "string",
                              title: "Value",
                              default: "256"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            images: {
              type: "array",
              title: "Images",
              items: {
                type: "object",
                properties: {
                  image: {
                    type: "object",
                    title: "Image",
                    properties: {
                      _attributes: {
                        type: "object",
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
                          }
                        }
                      },
                      height: {
                        type: "string",
                        title: "Height",
                        default: "1200"
                      },
                      width: {
                        type: "string",
                        title: "width",
                        default: "801"
                      },
                      aspect: {
                        type: "string",
                        title: "aspect",
                        default: "16x9"
                      },
                      primary: {
                        type: "string",
                        title: "primary",
                        default: "true"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        technicalContent: {
          type: "array",
          title: "Technical Content",
          items: {
            type: "object",
            properties: {
              _attributes: {
                type: "object",
                properties: {
                  providerResourceId: {
                    type: "string",
                    title: "Provider Resource Id",
                    default: "providerResourceId"
                  },
                  name: {
                    type: "string",
                    title: "Name",
                    default: "technical content name"
                  },
                  providerId: {
                    type: "string",
                    title: "Provider ID",
                    default: "GLOBAL"
                  },

                  profileId: {
                    type: "string",
                    title: "Profile ID",
                    default: "package_creation_hls_drm"
                  }
                }
              },
              metadataSet: {
                type: "array",
                title: "Metadata Set",
                items: {
                  type: "object",
                  properties: {
                    _attributes: {
                      type: "object",
                      properties: {
                        locale: {
                          type: "string",
                          title: "locale",
                          default: "en_US"
                        }
                      }
                    },
                    metadata: {
                      type: "array",
                      title: "Metadata",
                      items: {
                        type: "object",
                        properties: {
                          _attributes: {
                            type: "object",
                            properties: {
                              key: {
                                type: "string",
                                title: "Key",
                                default: "Definition"
                              }
                            }
                          },
                          _text: {
                            type: "string",
                            title: "Value",
                            default: "HD"
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
                  _attributes: {
                    type: "object",
                    properties: {
                      start: {
                        type: "string",
                        format: "date-time",
                        default: "2019-11-11T00:00:00Z"
                      },
                      end: {
                        type: "string",
                        format: "date-time",
                        default: "2020-12-01T00:00:00Z"
                      }
                    }
                  }
                }
              },
              editorialContentRef: {
                type: "object",
                title: "Editorial Content Reference",
                properties: {
                  _attributes: {
                    type: "object",
                    properties: {
                      providerId: {
                        type: "string",
                        title: "Provider ID",
                        default: "GLOBAL"
                      },
                      providerResourceId: {
                        type: "string",
                        title: "Provider Resource Id",
                        default: "GT_DRM_021219_Test01"
                      }
                    }
                  }
                }
              },
              securityInfo: {
                type: "object",
                title: "Security Info",
                properties: {
                  _attributes: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        title: "ID",
                        default: "GT_DRM_021219_Test01_DASH"
                      },
                      securityDeviceId: {
                        type: "string",
                        title: "Security Device ID",
                        default: "MCM"
                      }
                    }
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
              _attributes: {
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
                    default: "ProviderResourceId"
                  },
                  displayPriority: {
                    type: "string",
                    title: "Display Priority",
                    default: "1"
                  },
                  name: {
                    type: "string",
                    title: "Name",
                    default: "Content name"
                  },
                  publishToEndUser: {
                    type: "string",
                    title: "Pubblish To End User?",
                    default: "true"
                  },
                  type: {
                    type: "string",
                    title: "type",
                    default: "vod"
                  }
                }
              },
              period: {
                type: "object",
                title: "Period",
                properties: {
                  _attributes: {
                    type: "object",
                    properties: {
                      start: {
                        type: "string",
                        format: "date-time",
                        default: "2019-11-11T00:00:00Z"
                      },
                      end: {
                        type: "string",
                        format: "date-time",
                        default: "2020-12-01T00:00:00Z"
                      }
                    }
                  }
                }
              },
              technicalContentRef: {
                type: "object",
                properties: {
                  _attributes: {
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
                        default: "ProviderResourceId"
                      }
                    }
                  }
                }
              },
              nodeRef: {
                type: "object",
                properties: {
                  _attributes: {
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
                        default: "NODE_1572535048925"
                      }
                    }
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
                  _attributes: {
                    type: "object",
                    properties: {
                      providerId: {
                        type: "string",
                        title: "Provider ID",
                        default: "ProviderId"
                      },
                      providerResourceId: {
                        type: "string",
                        title: "Provider Resource Id",
                        default: "ProviderResourceId"
                      }
                    }
                  }
                }
              },
              marketableRef: {
                type: "object",
                title: "Marketable Ref",
                properties: {
                  _attributes: {
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
                        default: "ProviderResourceId"
                      },
                      type: {
                        type: "string",
                        title: "Type",
                        default: "contentPublishingWindow"
                      }
                    }
                  }
                }
              },
              validityPeriodSet: {
                type: "array",
                title: "Validity Period Set",
                items: {
                  type: "object",
                  properties: {
                    validityPeriod: {
                      type: "object",
                      properties: {
                        _attributes: {
                          type: "object",
                          properties: {
                            start: {
                              type: "string",
                              format: "date-time",
                              default: "2019-10-01T00:00:00Z"
                            },
                            end: {
                              type: "string",
                              format: "date-time",
                              default: "2020-07-01T00:00:00Z"
                            }
                          }
                        }
                      }
                    }
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
 
  formSubmission = ({ formData }, e) => {
    var options = { compact: true, ignoreComment: true, spaces: 4 };
    var temp = convert.js2xml(formData, options);
    console.dir(temp);
    this.setState ({
      data : temp
    });
    console.log(localStorage.JWT_TOKEN)
    upload(localStorage.storage, this.state.data)
    
  };

  
  
  render() {
    
    return (
      
      <Form
        schema={schema}
        
        formData={this.formData}
        onSubmit={this.formSubmission}
      />
      
    );
  }
}

