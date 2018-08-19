var watch = {
  "Watch": {
    "_attributes": {
      "name": "Q",
      "description": "",
      "tags": "12h,analog,date,digital,tap,ucolor",
      "features": "12h Time,Analog,Date,Digital,Tap Actions,Themeable",
      "shape": "R",
      "author": "",
      "web_link": "",
      "bg_color": "000000",
      "ucolor_default": "7388c7",
      "ind_loc": "tc",
      "ind_bg": "Y",
      "hotword_loc": "tc",
      "hotword_bg": "Y"
    },
    "Layer": [
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
                    "value": 440,
                    "raw": "440"
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
                    "value": 440,
                    "raw": "440"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
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
                    "value": 400,
                    "raw": "400"
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
                    "value": 400,
                    "raw": "400"
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
                    "value": 335,
                    "raw": "335"
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
                    "value": 335,
                    "raw": "335"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
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
                    "name": "Segment"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "drs"
                        }
                      }
                    ]
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
                    "type": "NumericLiteral",
                    "value": 100,
                    "raw": "100"
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
                    "value": 0,
                    "raw": "0"
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
                    "value": 295,
                    "raw": "295"
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
                    "value": 295,
                    "raw": "295"
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
                    "value": 230,
                    "raw": "230"
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
                    "value": 230,
                    "raw": "230"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
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
                    "value": 190,
                    "raw": "190"
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
                    "value": 190,
                    "raw": "190"
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
          },
          "tap_action": {
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
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "var_screen"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "BinaryExpression",
                      "operator": ">",
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
                    "name": "markers_hm"
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
          "radius": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "radius"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 256,
                    "raw": "256"
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
          "m_hour": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_hour"
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
          "m_minute": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_minute"
                  }
                ],
                "init": [
                  {
                    "type": "Identifier",
                    "name": "None"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "comments": []
          },
          "color2": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "color2"
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
          "squarify": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "squarify"
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
                      "type": "NumericLiteral",
                      "value": 172,
                      "raw": "172"
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
                                "name": "drh0"
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
                        "value": 172,
                        "raw": "172"
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
                                "name": "drh0"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "drh0"
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
                    "name": "Square"
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
                    "value": 148,
                    "raw": "148"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
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
                      "type": "NumericLiteral",
                      "value": 210,
                      "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
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
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "%",
                              "left": {
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
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 5,
                                "raw": "5"
                              },
                              "inParens": true
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 210,
                        "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
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
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "%",
                              "left": {
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
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 5,
                                "raw": "5"
                              },
                              "inParens": true
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                    "operator": "*",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "%",
                        "left": {
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 5,
                          "raw": "5"
                        },
                        "inParens": true
                      },
                      "inParens": true
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 6,
                      "raw": "6"
                    },
                    "inParens": true
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
                    "name": "Square"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": "#010003",
                    "raw": "\"#010003\""
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
                      "type": "NumericLiteral",
                      "value": 210,
                      "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                },
                                "inParens": true
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 5,
                              "raw": "5"
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 210,
                        "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                },
                                "inParens": true
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 5,
                              "raw": "5"
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                    "operator": "*",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
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
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          },
                          "inParens": true
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 5,
                        "raw": "5"
                      },
                      "inParens": true
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 6,
                      "raw": "6"
                    },
                    "inParens": true
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
                        "operator": ">=",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          }
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
                    "name": "Square"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": "#010003",
                    "raw": "\"#010003\""
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
                      "type": "NumericLiteral",
                      "value": 210,
                      "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                },
                                "inParens": true
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 10,
                              "raw": "10"
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 210,
                        "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                },
                                "inParens": true
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 10,
                              "raw": "10"
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                    "operator": "*",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
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
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          },
                          "inParens": true
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 10,
                        "raw": "10"
                      },
                      "inParens": true
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 6,
                      "raw": "6"
                    },
                    "inParens": true
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
                        "operator": ">=",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          }
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
                    "name": "Square"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": "#010003",
                    "raw": "\"#010003\""
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
                      "type": "NumericLiteral",
                      "value": 210,
                      "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                },
                                "inParens": true
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 15,
                              "raw": "15"
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 210,
                        "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                },
                                "inParens": true
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 15,
                              "raw": "15"
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                    "operator": "*",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
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
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          },
                          "inParens": true
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 15,
                        "raw": "15"
                      },
                      "inParens": true
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 6,
                      "raw": "6"
                    },
                    "inParens": true
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
                        "operator": ">=",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          }
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
                    "name": "Square"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": "#010003",
                    "raw": "\"#010003\""
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
                      "type": "NumericLiteral",
                      "value": 210,
                      "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                },
                                "inParens": true
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 20,
                              "raw": "20"
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 210,
                        "raw": "210"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
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
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 5,
                                  "raw": "5"
                                },
                                "inParens": true
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 20,
                              "raw": "20"
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
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
                    "operator": "*",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
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
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          },
                          "inParens": true
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 20,
                        "raw": "20"
                      },
                      "inParens": true
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 6,
                      "raw": "6"
                    },
                    "inParens": true
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
                        "operator": ">=",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          }
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
                    "name": "Square"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": 21,
                    "raw": "21"
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
                    "value": "#010003",
                    "raw": "\"#010003\""
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
                    "name": "markers"
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
          "radius": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "radius"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 195,
                    "raw": "195"
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
          "m_width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_width"
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
          "m_height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_height"
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
          "m_count": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_count"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
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
          "squarify": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "squarify"
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
                    "name": "markers"
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
          "radius": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "radius"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 140,
                    "raw": "140"
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
          "m_width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_width"
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
          "m_height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_height"
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
          "m_count": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_count"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
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
          "squarify": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "squarify"
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
                    "name": "markers"
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
          "radius": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "radius"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 37,
                    "raw": "37"
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
          "m_width": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_width"
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
          "m_height": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_height"
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
          "m_count": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "m_count"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 6,
                    "raw": "6"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
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
          "squarify": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "squarify"
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "Identifier",
                          "name": "ucolor"
                        }
                      }
                    ]
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
                      "type": "NumericLiteral",
                      "value": 246,
                      "raw": "246"
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
                                  "name": "dn"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 30,
                            "raw": "30"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 246,
                        "raw": "246"
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
                                  "name": "dn"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 30,
                            "raw": "30"
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
                    "value": 17,
                    "raw": "17"
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
                    "value": 17,
                    "raw": "17"
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
                    "value": "#010000",
                    "raw": "\"#010000\""
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
                      "type": "NumericLiteral",
                      "value": 185,
                      "raw": "185"
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
                            "type": "CallExpression",
                            "base": {
                              "type": "MemberExpression",
                              "indexer": ".",
                              "identifier": {
                                "type": "Identifier",
                                "name": "floor"
                              },
                              "base": {
                                "type": "Identifier",
                                "name": "math"
                              }
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 10,
                                  "raw": "10"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 90,
                            "raw": "90"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 185,
                        "raw": "185"
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
                            "type": "CallExpression",
                            "base": {
                              "type": "MemberExpression",
                              "indexer": ".",
                              "identifier": {
                                "type": "Identifier",
                                "name": "floor"
                              },
                              "base": {
                                "type": "Identifier",
                                "name": "math"
                              }
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "/",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 10,
                                  "raw": "10"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 90,
                            "raw": "90"
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
                    "value": 17,
                    "raw": "17"
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
                    "value": 17,
                    "raw": "17"
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
                    "value": "#010000",
                    "raw": "\"#010000\""
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
                      "type": "NumericLiteral",
                      "value": 130,
                      "raw": "130"
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
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
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
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 36,
                            "raw": "36"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 130,
                        "raw": "130"
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
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
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
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 36,
                            "raw": "36"
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
                    "value": 17,
                    "raw": "17"
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
                    "value": 17,
                    "raw": "17"
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
                    "value": "#010000",
                    "raw": "\"#010000\""
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
                      "type": "NumericLiteral",
                      "value": 27,
                      "raw": "27"
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
                                  "name": "ddw0"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 60,
                            "raw": "60"
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 27,
                        "raw": "27"
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
                                  "name": "ddw0"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 60,
                            "raw": "60"
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
                          "type": "BinaryExpression",
                          "operator": "~=",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "ddw0"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
                          }
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
                    "value": 17,
                    "raw": "17"
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
                    "value": 17,
                    "raw": "17"
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
                    "value": "#010000",
                    "raw": "\"#010000\""
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
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "ddw0"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 6,
                            "raw": "6"
                          }
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
                    "value": 17,
                    "raw": "17"
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
                    "value": 17,
                    "raw": "17"
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
                    "value": "#010000",
                    "raw": "\"#010000\""
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