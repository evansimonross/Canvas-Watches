var watch = {
  "Watch": {
    "_attributes": {
      "name": "Orbit",
      "description": "",
      "features": "12h Time,24h Time,Analog,Battery Level,Date,Digital,Phone Battery Level,Smooth Seconds,Tap Actions,Weather",
      "author": "Evan Simon Ross",
      "web_link": "",
      "bg_color": "000000",
      "ucolor_default": "ffffff",
      "ind_loc": "tc",
      "ind_bg": "Y",
      "hotword_loc": "tc",
      "hotword_bg": "Y"
    },
    "Layer": [
      {
        "_attributes": {
          "name": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "name"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "Layer 1",
                    "raw": "\"Layer 1\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "image"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "drh24"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 50,
                    "raw": "50"
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "path": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "path"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": ".img200.jpg",
                    "raw": "\".img200.jpg\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 835,
                    "raw": "835"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 523,
                    "raw": "523"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#ffffff",
                    "raw": "\"#ffffff\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 85,
                        "raw": "85"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 85,
                      "raw": "85"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "%",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drss"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 4,
                          "raw": "4"
                        },
                        "inParens": true
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 360,
                      "raw": "360"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shape": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "Circle"
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 36,
                    "raw": "36"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 36,
                    "raw": "36"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#e3ff00",
                    "raw": "\"#e3ff00\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          },
          "tap_action": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "tap_action"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "m_update_weather"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shader": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shader"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "GradientLinear"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_1": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_1"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#d2c200",
                    "raw": "\"#d2c200\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_2"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#544900",
                    "raw": "\"#544900\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_3": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_3"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_4": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_4"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 101,
                    "raw": "101"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 65,
                        "raw": "65"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 65,
                      "raw": "65"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "%",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "TableConstructorExpression",
                        "fields": [
                          {
                            "type": "TableValue",
                            "value": {
                              "type": "Identifier",
                              "name": "drss"
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 4,
                        "raw": "4"
                      },
                      "inParens": true
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 360,
                      "raw": "360"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shape": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "Circle"
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 20,
                    "raw": "20"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 20,
                    "raw": "20"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#995b00",
                    "raw": "\"#995b00\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shader": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shader"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "GradientLinear"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_1": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_1"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#978b00",
                    "raw": "\"#978b00\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_2"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#540000",
                    "raw": "\"#540000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_3": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_3"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_4": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_4"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 101,
                    "raw": "101"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 228,
                        "raw": "228"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drh"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 12,
                                "raw": "12"
                              },
                              "right": {
                                "type": "CallExpression",
                                "base": {
                                  "type": "MemberExpression",
                                  "indexer": ".",
                                  "identifier": {
                                    "type": "Identifier",
                                    "name": "cos"
                                  },
                                  "base": {
                                    "type": "Identifier",
                                    "name": "math"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "%",
                                    "left": {
                                      "type": "TableConstructorExpression",
                                      "fields": [
                                        {
                                          "type": "TableValue",
                                          "value": {
                                            "type": "Identifier",
                                            "name": "drss"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 180,
                                      "raw": "180"
                                    }
                                  }
                                ]
                              },
                              "inParens": true
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drss"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 180,
                              "raw": "180"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 228,
                          "raw": "228"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drh"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 12,
                                "raw": "12"
                              },
                              "right": {
                                "type": "CallExpression",
                                "base": {
                                  "type": "MemberExpression",
                                  "indexer": ".",
                                  "identifier": {
                                    "type": "Identifier",
                                    "name": "cos"
                                  },
                                  "base": {
                                    "type": "Identifier",
                                    "name": "math"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "%",
                                    "left": {
                                      "type": "TableConstructorExpression",
                                      "fields": [
                                        {
                                          "type": "TableValue",
                                          "value": {
                                            "type": "Identifier",
                                            "name": "drss"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 180,
                                      "raw": "180"
                                    }
                                  }
                                ]
                              },
                              "inParens": true
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drss"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 180,
                              "raw": "180"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "TableConstructorExpression",
                      "fields": [
                        {
                          "type": "TableValue",
                          "value": {
                            "type": "Identifier",
                            "name": "drss"
                          }
                        }
                      ]
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "var_screen"
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
                        },
                        "inParens": true
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "var_screen"
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
                        },
                        "inParens": true
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shape": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "Circle"
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 15,
                    "raw": "15"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 15,
                    "raw": "15"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#b9b9b9",
                    "raw": "\"#b9b9b9\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shader": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shader"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "GradientLinear"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_1": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_1"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#aaaaaa",
                    "raw": "\"#aaaaaa\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_2"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#3a3a3a",
                    "raw": "\"#3a3a3a\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_3": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_3"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_4": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_4"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 101,
                    "raw": "101"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 225,
                      "raw": "225"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drh"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 225,
                        "raw": "225"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drh"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "%",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "TableConstructorExpression",
                        "fields": [
                          {
                            "type": "TableValue",
                            "value": {
                              "type": "Identifier",
                              "name": "drss"
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      },
                      "inParens": true
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 360,
                      "raw": "360"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "var_screen"
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
                        },
                        "inParens": true
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "var_screen"
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
                        },
                        "inParens": true
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shape": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "Circle"
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#ff0000",
                    "raw": "\"#ff0000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          },
          "tap_action": {
            "type": "Chunk",
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "var_screen"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "body": [
                      {
                        "type": "AssignmentStatement",
                        "variables": [
                          {
                            "type": "Identifier",
                            "name": "var_screen"
                          }
                        ],
                        "init": [
                          {
                            "type": "NumericLiteral",
                            "value": 1,
                            "raw": "1"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "ElseClause",
                    "body": [
                      {
                        "type": "AssignmentStatement",
                        "variables": [
                          {
                            "type": "Identifier",
                            "name": "var_screen"
                          }
                        ],
                        "init": [
                          {
                            "type": "NumericLiteral",
                            "value": 4,
                            "raw": "4"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "shader": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shader"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "GradientLinear"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_1": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_1"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#ffb5b5",
                    "raw": "\"#ffb5b5\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_2"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#9e1a00",
                    "raw": "\"#9e1a00\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_3": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_3"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_4": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_4"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 101,
                    "raw": "101"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 228,
                        "raw": "228"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drh"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 12,
                                "raw": "12"
                              },
                              "right": {
                                "type": "CallExpression",
                                "base": {
                                  "type": "MemberExpression",
                                  "indexer": ".",
                                  "identifier": {
                                    "type": "Identifier",
                                    "name": "cos"
                                  },
                                  "base": {
                                    "type": "Identifier",
                                    "name": "math"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "%",
                                    "left": {
                                      "type": "TableConstructorExpression",
                                      "fields": [
                                        {
                                          "type": "TableValue",
                                          "value": {
                                            "type": "Identifier",
                                            "name": "drss"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 180,
                                      "raw": "180"
                                    }
                                  }
                                ]
                              },
                              "inParens": true
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drss"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 180,
                              "raw": "180"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 228,
                          "raw": "228"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drh"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 12,
                                "raw": "12"
                              },
                              "right": {
                                "type": "CallExpression",
                                "base": {
                                  "type": "MemberExpression",
                                  "indexer": ".",
                                  "identifier": {
                                    "type": "Identifier",
                                    "name": "cos"
                                  },
                                  "base": {
                                    "type": "Identifier",
                                    "name": "math"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "%",
                                    "left": {
                                      "type": "TableConstructorExpression",
                                      "fields": [
                                        {
                                          "type": "TableValue",
                                          "value": {
                                            "type": "Identifier",
                                            "name": "drss"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 180,
                                      "raw": "180"
                                    }
                                  }
                                ]
                              },
                              "inParens": true
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drss"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 180,
                              "raw": "180"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "TableConstructorExpression",
                      "fields": [
                        {
                          "type": "TableValue",
                          "value": {
                            "type": "Identifier",
                            "name": "drss"
                          }
                        }
                      ]
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "var_screen"
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
                        },
                        "inParens": true
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "name": "var_screen"
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
                        },
                        "inParens": true
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shape": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "Circle"
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 15,
                    "raw": "15"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 15,
                    "raw": "15"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#b9b9b9",
                    "raw": "\"#b9b9b9\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shader": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shader"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "GradientLinear"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_1": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_1"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#aaaaaa",
                    "raw": "\"#aaaaaa\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_2"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#3a3a3a",
                    "raw": "\"#3a3a3a\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_3": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_3"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_4": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_4"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 101,
                    "raw": "101"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 150,
                      "raw": "150"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "%",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "TableConstructorExpression",
                        "fields": [
                          {
                            "type": "TableValue",
                            "value": {
                              "type": "Identifier",
                              "name": "drss"
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "inParens": true
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 360,
                      "raw": "360"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shape": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "Circle"
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 50,
                    "raw": "50"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 50,
                    "raw": "50"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#00ffc4",
                    "raw": "\"#00ffc4\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          },
          "tap_action": {
            "type": "Chunk",
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "var_screen"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "body": [
                      {
                        "type": "AssignmentStatement",
                        "variables": [
                          {
                            "type": "Identifier",
                            "name": "var_screen"
                          }
                        ],
                        "init": [
                          {
                            "type": "NumericLiteral",
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "ElseClause",
                    "body": [
                      {
                        "type": "AssignmentStatement",
                        "variables": [
                          {
                            "type": "Identifier",
                            "name": "var_screen"
                          }
                        ],
                        "init": [
                          {
                            "type": "NumericLiteral",
                            "value": 2,
                            "raw": "2"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "shader": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shader"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "GradientLinear"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_1": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_1"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#00be70",
                    "raw": "\"#00be70\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_2"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#00a1ff",
                    "raw": "\"#00a1ff\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_3": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_3"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_4": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_4"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shape": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "Circle"
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#ffa200",
                    "raw": "\"#ffa200\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          },
          "tap_action": {
            "type": "Chunk",
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "var_screen"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "body": [
                      {
                        "type": "AssignmentStatement",
                        "variables": [
                          {
                            "type": "Identifier",
                            "name": "var_screen"
                          }
                        ],
                        "init": [
                          {
                            "type": "NumericLiteral",
                            "value": 1,
                            "raw": "1"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "ElseClause",
                    "body": [
                      {
                        "type": "AssignmentStatement",
                        "variables": [
                          {
                            "type": "Identifier",
                            "name": "var_screen"
                          }
                        ],
                        "init": [
                          {
                            "type": "NumericLiteral",
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "shader": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shader"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "GradientRadial"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_1": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_1"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#ff6b00",
                    "raw": "\"#ff6b00\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_2"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#ffe400",
                    "raw": "\"#ffe400\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_3": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_3"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 70,
                    "raw": "70"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 60,
                        "raw": "60"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drss"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 150,
                          "raw": "150"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 60,
                        "raw": "60"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drss"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "drss"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "shape": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shape"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "Circle"
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 35,
                    "raw": "35"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 35,
                    "raw": "35"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#ffc4d7",
                    "raw": "\"#ffc4d7\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          },
          "tap_action": {
            "type": "Chunk",
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "var_screen"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "body": [
                      {
                        "type": "AssignmentStatement",
                        "variables": [
                          {
                            "type": "Identifier",
                            "name": "var_screen"
                          }
                        ],
                        "init": [
                          {
                            "type": "NumericLiteral",
                            "value": 0,
                            "raw": "0"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "ElseClause",
                    "body": [
                      {
                        "type": "AssignmentStatement",
                        "variables": [
                          {
                            "type": "Identifier",
                            "name": "var_screen"
                          }
                        ],
                        "init": [
                          {
                            "type": "NumericLiteral",
                            "value": 3,
                            "raw": "3"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "shader": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "shader"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "GradientLinear"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_1": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_1"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#ffc4d7",
                    "raw": "\"#ffc4d7\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_2"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#4a4a4a",
                    "raw": "\"#4a4a4a\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_3": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_3"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 180,
                    "raw": "180"
                  }
                ]
              }
            ],
            "comments": []
          },
          "u_4": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "u_4"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "dh"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 150,
                      "raw": "150"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "dm"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 18,
                    "raw": "18"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 60,
                        "raw": "60"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drss"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 150,
                          "raw": "150"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 60,
                        "raw": "60"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drss"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "DS"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 13,
                    "raw": "13"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "b"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 150,
                      "raw": "150"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "wt"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 18,
                    "raw": "18"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 60,
                        "raw": "60"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drss"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 150,
                          "raw": "150"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 60,
                        "raw": "60"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drss"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "..",
                    "left": {
                      "type": "StringLiteral",
                      "value": "°",
                      "raw": "\"°\""
                    },
                    "right": {
                      "type": "TableConstructorExpression",
                      "fields": [
                        {
                          "type": "TableValue",
                          "value": {
                            "type": "Identifier",
                            "name": "wm"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 13,
                    "raw": "13"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "image_cond"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "path": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "path"
                  }
                ],
                "init": [
                  {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "png"
                    },
                    "base": {
                      "type": "Identifier",
                      "name": "weather_set_2"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "width"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 90,
                    "raw": "90"
                  }
                ]
              }
            ],
            "comments": []
          },
          "height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "height"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 90,
                    "raw": "90"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "cond_value": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "cond_value"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "or",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "or",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "or",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "or",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "or",
                                "left": {
                                  "type": "LogicalExpression",
                                  "operator": "or",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "operator": "or",
                                    "left": {
                                      "type": "LogicalExpression",
                                      "operator": "and",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "==",
                                        "left": {
                                          "type": "StringLiteral",
                                          "value": "{wci}",
                                          "raw": "'{wci}'"
                                        },
                                        "right": {
                                          "type": "StringLiteral",
                                          "value": "01d",
                                          "raw": "'01d'"
                                        }
                                      },
                                      "right": {
                                        "type": "NumericLiteral",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "right": {
                                      "type": "LogicalExpression",
                                      "operator": "and",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "==",
                                        "left": {
                                          "type": "StringLiteral",
                                          "value": "{wci}",
                                          "raw": "'{wci}'"
                                        },
                                        "right": {
                                          "type": "StringLiteral",
                                          "value": "02d",
                                          "raw": "'02d'"
                                        }
                                      },
                                      "right": {
                                        "type": "NumericLiteral",
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "LogicalExpression",
                                    "operator": "and",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "==",
                                      "left": {
                                        "type": "StringLiteral",
                                        "value": "{wci}",
                                        "raw": "'{wci}'"
                                      },
                                      "right": {
                                        "type": "StringLiteral",
                                        "value": "03d",
                                        "raw": "'03d'"
                                      }
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 3,
                                      "raw": "3"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "LogicalExpression",
                                  "operator": "and",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "==",
                                    "left": {
                                      "type": "StringLiteral",
                                      "value": "{wci}",
                                      "raw": "'{wci}'"
                                    },
                                    "right": {
                                      "type": "StringLiteral",
                                      "value": "04d",
                                      "raw": "'04d'"
                                    }
                                  },
                                  "right": {
                                    "type": "NumericLiteral",
                                    "value": 4,
                                    "raw": "4"
                                  }
                                }
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "operator": "and",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "==",
                                  "left": {
                                    "type": "StringLiteral",
                                    "value": "{wci}",
                                    "raw": "'{wci}'"
                                  },
                                  "right": {
                                    "type": "StringLiteral",
                                    "value": "09d",
                                    "raw": "'09d'"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "and",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "==",
                                "left": {
                                  "type": "StringLiteral",
                                  "value": "{wci}",
                                  "raw": "'{wci}'"
                                },
                                "right": {
                                  "type": "StringLiteral",
                                  "value": "10d",
                                  "raw": "'10d'"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 6,
                                "raw": "6"
                              }
                            }
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "operator": "and",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "==",
                              "left": {
                                "type": "StringLiteral",
                                "value": "{wci}",
                                "raw": "'{wci}'"
                              },
                              "right": {
                                "type": "StringLiteral",
                                "value": "11d",
                                "raw": "'11d'"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 7,
                              "raw": "7"
                            }
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "==",
                            "left": {
                              "type": "StringLiteral",
                              "value": "{wci}",
                              "raw": "'{wci}'"
                            },
                            "right": {
                              "type": "StringLiteral",
                              "value": "13d",
                              "raw": "'13d'"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 8,
                            "raw": "8"
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "StringLiteral",
                            "value": "{wci}",
                            "raw": "'{wci}'"
                          },
                          "right": {
                            "type": "StringLiteral",
                            "value": "50d",
                            "raw": "'50d'"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "cond_grid": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "cond_grid"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "3x3",
                    "raw": "\"3x3\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 3,
                          "raw": "3"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ddw"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 25,
                    "raw": "25"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 150,
                      "raw": "150"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 3,
                          "raw": "3"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "dnnn"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 13,
                    "raw": "13"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 60,
                        "raw": "60"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "sin"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drss"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 150,
                          "raw": "150"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drm"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 60,
                        "raw": "60"
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "cos"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "math"
                          }
                        },
                        "arguments": [
                          {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "drss"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 3,
                          "raw": "3"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "dd"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 13,
                    "raw": "13"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 225,
                      "raw": "225"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drh"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 225,
                        "raw": "225"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drh"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 4,
                          "raw": "4"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "pblp"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 10,
                    "raw": "10"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      },
      {
        "_attributes": {
          "type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "type"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ]
              }
            ],
            "comments": []
          },
          "x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 150,
                      "raw": "150"
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "sin"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 150,
                        "raw": "150"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "cos"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "math"
                        }
                      },
                      "arguments": [
                        {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "drm"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "gyro": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "gyro"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotation": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotation"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "skew_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "skew_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            ],
            "comments": []
          },
          "opacity": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "opacity"
                  }
                ],
                "init": [
                  {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "var_screen"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 4,
                          "raw": "4"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "alignment": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "alignment"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "cc"
                  }
                ]
              }
            ],
            "comments": []
          },
          "text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text"
                  }
                ],
                "init": [
                  {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "blp"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "text_size": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "text_size"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 13,
                    "raw": "13"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_x": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_x"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "anim_scale_y": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "anim_scale_y"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
                  }
                ]
              }
            ],
            "comments": []
          },
          "font": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "font"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "pirulen"
                  }
                ]
              }
            ],
            "comments": []
          },
          "transform": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "transform"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "n"
                  }
                ]
              }
            ],
            "comments": []
          },
          "color_dim": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color_dim"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "color": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "#000000",
                    "raw": "\"#000000\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "display": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "display"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "bd"
                  }
                ]
              }
            ],
            "comments": []
          }
        }
      }
    ],
    "Script": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "var_screen"
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            }
          ]
        },
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "sin"
            },
            {
              "type": "Identifier",
              "name": "cos"
            }
          ],
          "init": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "sin"
              },
              "base": {
                "type": "Identifier",
                "name": "math"
              }
            },
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "cos"
              },
              "base": {
                "type": "Identifier",
                "name": "math"
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "sin"
              },
              "base": {
                "type": "Identifier",
                "name": "math"
              }
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "x"
                }
              ],
              "body": [
                {
                  "type": "ReturnStatement",
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "sin"
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "base": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "rad"
                            },
                            "base": {
                              "type": "Identifier",
                              "name": "math"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "cos"
              },
              "base": {
                "type": "Identifier",
                "name": "math"
              }
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "x"
                }
              ],
              "body": [
                {
                  "type": "ReturnStatement",
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "cos"
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "base": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "rad"
                            },
                            "base": {
                              "type": "Identifier",
                              "name": "math"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    }
  }
}