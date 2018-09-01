var watch = {
  "Watch": {
    "_attributes": {
      "name": "Speed Demon",
      "description": "",
      "tags": "24h,analog,battery,date,digital,phone battery,stopwatch,tap",
      "features": "24h Time,Analog,Battery Level,Date,Digital,Phone Battery,Smooth Seconds,Stopwatch,Tap Actions",
      "shape": "R",
      "author": "",
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
                          "value": 2,
                          "raw": "2"
                        }
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
                    "value": 2,
                    "raw": "2"
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
                    "value": 10,
                    "raw": "10"
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
                    "value": 180,
                    "raw": "180"
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
                          "value": 2,
                          "raw": "2"
                        }
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
                    "value": 4,
                    "raw": "4"
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
                    "value": 14,
                    "raw": "14"
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
                    "value": "#ffffff",
                    "raw": "\"#ffffff\""
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
                    "value": 6,
                    "raw": "6"
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
                    "value": 18,
                    "raw": "18"
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
                    "value": 12,
                    "raw": "12"
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
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 5,
                          "raw": "5"
                        },
                        "right": {
                          "type": "CallExpression",
                          "base": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "abs"
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
                                "type": "NumericLiteral",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "var_screen"
                              }
                            }
                          ]
                        }
                      },
                      "inParens": true
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
                          "type": "NumericLiteral",
                          "value": 300,
                          "raw": "300"
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          },
                          "right": {
                            "type": "CallExpression",
                            "base": {
                              "type": "MemberExpression",
                              "indexer": ".",
                              "identifier": {
                                "type": "Identifier",
                                "name": "abs"
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
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "var_screen"
                                }
                              }
                            ]
                          }
                        },
                        "inParens": true
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
                          "type": "NumericLiteral",
                          "value": 300,
                          "raw": "300"
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
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "and",
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
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 0,
                                "raw": "0"
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
                                      "name": "dm"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 59,
                                "raw": "59"
                              }
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 59,
                              "raw": "59"
                            }
                          },
                          "inParens": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
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
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                }
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
                                      "name": "dm"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 0,
                                "raw": "0"
                              }
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "inParens": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
                            },
                            "right": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drms"
                                  }
                                }
                              ]
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 360,
                            "raw": "360"
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 100,
                      "raw": "100"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
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
                                  "name": "dh"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
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
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
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
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      }
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
                        "value": 27,
                        "raw": "27"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 35,
                      "raw": "35"
                    }
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
                    "type": "StringLiteral",
                    "value": "Euro Caps",
                    "raw": "\"Euro Caps\""
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
                    "value": "#ffffff",
                    "raw": "\"#ffffff\""
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
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 5,
                          "raw": "5"
                        },
                        "right": {
                          "type": "CallExpression",
                          "base": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "abs"
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
                                "type": "NumericLiteral",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "var_screen"
                              }
                            }
                          ]
                        }
                      },
                      "inParens": true
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
                          "type": "NumericLiteral",
                          "value": 60,
                          "raw": "60"
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          },
                          "right": {
                            "type": "CallExpression",
                            "base": {
                              "type": "MemberExpression",
                              "indexer": ".",
                              "identifier": {
                                "type": "Identifier",
                                "name": "abs"
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
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "var_screen"
                                }
                              }
                            ]
                          }
                        },
                        "inParens": true
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
                          "type": "NumericLiteral",
                          "value": 60,
                          "raw": "60"
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
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "and",
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
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                }
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
                                      "name": "dm"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 59,
                                "raw": "59"
                              }
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 59,
                              "raw": "59"
                            }
                          },
                          "inParens": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
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
                                "type": "BinaryExpression",
                                "operator": "%",
                                "left": {
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
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 0,
                                "raw": "0"
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
                                      "name": "dm"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 0,
                                "raw": "0"
                              }
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "inParens": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
                            },
                            "right": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drms"
                                  }
                                }
                              ]
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 360,
                            "raw": "360"
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 100,
                      "raw": "100"
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
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
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
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "right": {
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
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 12,
                            "raw": "12"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
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
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      }
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
                        "value": 27,
                        "raw": "27"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 35,
                      "raw": "35"
                    }
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
                    "type": "StringLiteral",
                    "value": "Euro Caps",
                    "raw": "\"Euro Caps\""
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
                    "value": "#ffffff",
                    "raw": "\"#ffffff\""
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
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 5,
                          "raw": "5"
                        },
                        "right": {
                          "type": "CallExpression",
                          "base": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "abs"
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
                                "type": "NumericLiteral",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "var_screen"
                              }
                            }
                          ]
                        }
                      },
                      "inParens": true
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
                          "type": "NumericLiteral",
                          "value": 120,
                          "raw": "120"
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          },
                          "right": {
                            "type": "CallExpression",
                            "base": {
                              "type": "MemberExpression",
                              "indexer": ".",
                              "identifier": {
                                "type": "Identifier",
                                "name": "abs"
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
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "var_screen"
                                }
                              }
                            ]
                          }
                        },
                        "inParens": true
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
                          "type": "NumericLiteral",
                          "value": 120,
                          "raw": "120"
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
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 0,
                              "raw": "0"
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 59,
                              "raw": "59"
                            }
                          },
                          "inParens": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "==",
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
                                "value": 2,
                                "raw": "2"
                              }
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "inParens": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
                            },
                            "right": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drms"
                                  }
                                }
                              ]
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 360,
                            "raw": "360"
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 100,
                      "raw": "100"
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
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
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
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
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
                            "value": 59,
                            "raw": "59"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
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
                        "value": 1,
                        "raw": "1"
                      }
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
                        "value": 27,
                        "raw": "27"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 35,
                      "raw": "35"
                    }
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
                    "type": "StringLiteral",
                    "value": "Euro Caps",
                    "raw": "\"Euro Caps\""
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
                    "value": "#ffffff",
                    "raw": "\"#ffffff\""
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
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 5,
                          "raw": "5"
                        },
                        "right": {
                          "type": "CallExpression",
                          "base": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "abs"
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
                                "type": "NumericLiteral",
                                "value": 2,
                                "raw": "2"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "var_screen"
                              }
                            }
                          ]
                        }
                      },
                      "inParens": true
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
                          "type": "NumericLiteral",
                          "value": 240,
                          "raw": "240"
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 5,
                            "raw": "5"
                          },
                          "right": {
                            "type": "CallExpression",
                            "base": {
                              "type": "MemberExpression",
                              "indexer": ".",
                              "identifier": {
                                "type": "Identifier",
                                "name": "abs"
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
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "var_screen"
                                }
                              }
                            ]
                          }
                        },
                        "inParens": true
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
                          "type": "NumericLiteral",
                          "value": 240,
                          "raw": "240"
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
                                "value": 2,
                                "raw": "2"
                              }
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 59,
                              "raw": "59"
                            }
                          },
                          "inParens": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "==",
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
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 0,
                              "raw": "0"
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "inParens": true
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
                            },
                            "right": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "drms"
                                  }
                                }
                              ]
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 360,
                            "raw": "360"
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 100,
                      "raw": "100"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
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
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
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
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
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
                        "value": 1,
                        "raw": "1"
                      }
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
                        "value": 27,
                        "raw": "27"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 35,
                      "raw": "35"
                    }
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
                    "type": "StringLiteral",
                    "value": "Euro Caps",
                    "raw": "\"Euro Caps\""
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
                    "value": "#ffffff",
                    "raw": "\"#ffffff\""
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
                    "name": "text_ring"
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
                    "type": "StringLiteral",
                    "value": "BebasNeue Regular",
                    "raw": "\"BebasNeue Regular\""
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
                    "value": 220,
                    "raw": "220"
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
          "ring_type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "ring_type"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "0 to 100",
                    "raw": "\"0 to 100\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "show_every": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "show_every"
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
          "hide_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "hide_text"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotated_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotated_text"
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
          "angle_start": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_start"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 249,
                    "raw": "249"
                  }
                ]
              }
            ],
            "comments": []
          },
          "angle_end": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_end"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 291,
                    "raw": "291"
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
                    "name": "text_ring"
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
                    "type": "StringLiteral",
                    "value": "BebasNeue Regular",
                    "raw": "\"BebasNeue Regular\""
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
                    "value": 220,
                    "raw": "220"
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
          "ring_type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "ring_type"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "100 to 0",
                    "raw": "\"100 to 0\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "show_every": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "show_every"
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
          "hide_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "hide_text"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotated_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotated_text"
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
          "angle_start": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_start"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 69,
                    "raw": "69"
                  }
                ]
              }
            ],
            "comments": []
          },
          "angle_end": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_end"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 111,
                    "raw": "111"
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
                    "name": "text_ring"
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
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "or",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "or",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "~=",
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
                              "type": "BinaryExpression",
                              "operator": "==",
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
                                        "name": "dh"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "and",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "==",
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
                                "value": 0,
                                "raw": "0"
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
                                      "name": "ds"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          },
                          "inParens": true
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "==",
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
                              "value": 59,
                              "raw": "59"
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 59,
                              "raw": "59"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          }
                        },
                        "inParens": true
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 100,
                      "raw": "100"
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
                    "value": 18,
                    "raw": "18"
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
                    "type": "StringLiteral",
                    "value": "BebasNeue Regular",
                    "raw": "\"BebasNeue Regular\""
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
                    "value": 220,
                    "raw": "220"
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
          "ring_type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "ring_type"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "5 to 55",
                    "raw": "\"5 to 55\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "show_every": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "show_every"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            ],
            "comments": []
          },
          "hide_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "hide_text"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotated_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotated_text"
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
          "angle_start": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_start"
                  }
                ],
                "init": [
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 52,
                      "raw": "52"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "angle_end": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_end"
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
                    "name": "text_ring"
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
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "or",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "or",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "~=",
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
                              "type": "BinaryExpression",
                              "operator": "==",
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
                                        "name": "dh"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "and",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "==",
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
                                "value": 0,
                                "raw": "0"
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
                                      "name": "ds"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          },
                          "inParens": true
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "==",
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
                              "value": 59,
                              "raw": "59"
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
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 59,
                              "raw": "59"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          }
                        },
                        "inParens": true
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 100,
                      "raw": "100"
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
                    "value": 18,
                    "raw": "18"
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
                    "type": "StringLiteral",
                    "value": "BebasNeue Regular",
                    "raw": "\"BebasNeue Regular\""
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
                    "value": 220,
                    "raw": "220"
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
          "ring_type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "ring_type"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "55 to 5",
                    "raw": "\"55 to 5\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "show_every": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "show_every"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            ],
            "comments": []
          },
          "hide_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "hide_text"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotated_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotated_text"
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
          "angle_start": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_start"
                  }
                ],
                "init": [
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 50,
                      "raw": "50"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "angle_end": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_end"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 52,
                    "raw": "52"
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
                    "name": "text_ring"
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
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "or",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "or",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "~=",
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
                              "type": "BinaryExpression",
                              "operator": "==",
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
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "==",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          },
                          "inParens": true
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "ds"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 59,
                            "raw": "59"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          }
                        },
                        "inParens": true
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 100,
                      "raw": "100"
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
                    "value": 18,
                    "raw": "18"
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
                    "type": "StringLiteral",
                    "value": "BebasNeue Regular",
                    "raw": "\"BebasNeue Regular\""
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
                    "value": 220,
                    "raw": "220"
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
          "ring_type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "ring_type"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "5 to 55",
                    "raw": "\"5 to 55\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "show_every": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "show_every"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            ],
            "comments": []
          },
          "hide_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "hide_text"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotated_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotated_text"
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
          "angle_start": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_start"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 128,
                    "raw": "128"
                  }
                ]
              }
            ],
            "comments": []
          },
          "angle_end": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_end"
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
                    "name": "text_ring"
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
                      "operator": "or",
                      "left": {
                        "type": "LogicalExpression",
                        "operator": "or",
                        "left": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "LogicalExpression",
                            "operator": "or",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "~=",
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
                              "type": "BinaryExpression",
                              "operator": "==",
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
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "inParens": true
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "operator": "and",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "==",
                            "left": {
                              "type": "TableConstructorExpression",
                              "fields": [
                                {
                                  "type": "TableValue",
                                  "value": {
                                    "type": "Identifier",
                                    "name": "ds"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          },
                          "inParens": true
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "and",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "ds"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 59,
                            "raw": "59"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "NumericLiteral",
                                "value": 100,
                                "raw": "100"
                              },
                              "right": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableValue",
                                    "value": {
                                      "type": "Identifier",
                                      "name": "drms"
                                    }
                                  }
                                ]
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 360,
                              "raw": "360"
                            }
                          }
                        },
                        "inParens": true
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 100,
                      "raw": "100"
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
                    "value": 18,
                    "raw": "18"
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
                    "type": "StringLiteral",
                    "value": "BebasNeue Regular",
                    "raw": "\"BebasNeue Regular\""
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
                    "value": 220,
                    "raw": "220"
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
          "ring_type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "ring_type"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "55 to 5",
                    "raw": "\"55 to 5\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "show_every": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "show_every"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            ],
            "comments": []
          },
          "hide_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "hide_text"
                  }
                ],
                "init": [
                  {
                    "type": "StringLiteral",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
            "comments": []
          },
          "rotated_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotated_text"
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
          "angle_start": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_start"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 130,
                    "raw": "130"
                  }
                ]
              }
            ],
            "comments": []
          },
          "angle_end": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_end"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 232,
                    "raw": "232"
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
                    "name": "text_ring"
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
                    "value": 14,
                    "raw": "14"
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
                    "name": "BebasNeue"
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
                    "value": 220,
                    "raw": "220"
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
          "ring_type": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "ring_type"
                  }
                ],
                "init": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 60,
                      "raw": "60"
                    }
                  }
                ]
              }
            ],
            "comments": []
          },
          "show_every": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "show_every"
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
            ],
            "comments": []
          },
          "hide_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "hide_text"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "NumericLiteral",
                    "value": 20,
                    "raw": "20"
                  },
                  {
                    "type": "NumericLiteral",
                    "value": 40,
                    "raw": "40"
                  },
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
          "rotated_text": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "rotated_text"
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
          "angle_start": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_start"
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
          "angle_end": {
            "type": "Chunk",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "angle_end"
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 360,
                    "raw": "360"
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
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 125,
                      "raw": "125"
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
                    "value": 80,
                    "raw": "80"
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
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 125,
                      "raw": "125"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dh23"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 23,
                          "raw": "23"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "NumericLiteral",
                              "value": 30,
                              "raw": "30"
                            }
                          },
                          "right": {
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 360,
                          "raw": "360"
                        }
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
                    "type": "CallExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "weekday"
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
                                "name": "ddw0"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
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
                    "value": 30,
                    "raw": "30"
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
                    "type": "StringLiteral",
                    "value": "Euro Caps",
                    "raw": "\"Euro Caps\""
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
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 125,
                      "raw": "125"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dh23"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 23,
                          "raw": "23"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 30,
                          "raw": "30"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 30,
                              "raw": "30"
                            },
                            "right": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 360,
                            "raw": "360"
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 30,
                      "raw": "30"
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
                    "type": "CallExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "weekday"
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
                                "name": "ddw0"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
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
                    "value": 30,
                    "raw": "30"
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
                    "type": "StringLiteral",
                    "value": "Euro Caps",
                    "raw": "\"Euro Caps\""
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
                    "value": 140,
                    "raw": "140"
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
                    "value": 115,
                    "raw": "115"
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
                    "value": 125,
                    "raw": "125"
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
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": ">",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "dh23"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 11,
                            "raw": "11"
                          }
                        },
                        "inParens": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "NumericLiteral",
                              "value": 30,
                              "raw": "30"
                            }
                          },
                          "right": {
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 360,
                          "raw": "360"
                        }
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
                    "type": "CallExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "month"
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
                                "name": "dnn"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
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
                    "value": 30,
                    "raw": "30"
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
                    "type": "StringLiteral",
                    "value": "Euro Caps",
                    "raw": "\"Euro Caps\""
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
                    "type": "NumericLiteral",
                    "value": 125,
                    "raw": "125"
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
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": ">",
                          "left": {
                            "type": "TableConstructorExpression",
                            "fields": [
                              {
                                "type": "TableValue",
                                "value": {
                                  "type": "Identifier",
                                  "name": "dh23"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 11,
                            "raw": "11"
                          }
                        },
                        "inParens": true
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 30,
                          "raw": "30"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 30,
                              "raw": "30"
                            },
                            "right": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 360,
                            "raw": "360"
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 30,
                      "raw": "30"
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
                    "type": "CallExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "month"
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
                                "name": "dnn"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
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
                    "value": 30,
                    "raw": "30"
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
                    "type": "StringLiteral",
                    "value": "Euro Caps",
                    "raw": "\"Euro Caps\""
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
                    "type": "NumericLiteral",
                    "value": 180,
                    "raw": "180"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dh23"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 23,
                          "raw": "23"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "NumericLiteral",
                              "value": 30,
                              "raw": "30"
                            }
                          },
                          "right": {
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 360,
                          "raw": "360"
                        }
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
                          "name": "ddz"
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
                    "type": "StringLiteral",
                    "value": "BebasNeue Regular",
                    "raw": "\"BebasNeue Regular\""
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
                    "type": "NumericLiteral",
                    "value": 180,
                    "raw": "180"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dh23"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 23,
                          "raw": "23"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 30,
                          "raw": "30"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 30,
                              "raw": "30"
                            },
                            "right": {
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
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 360,
                            "raw": "360"
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 30,
                      "raw": "30"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<",
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
                          "value": 9,
                          "raw": "9"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "..",
                        "left": {
                          "type": "StringLiteral",
                          "value": "0",
                          "raw": "\"0\""
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
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
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
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
                        "value": 1,
                        "raw": "1"
                      }
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
                    "type": "StringLiteral",
                    "value": "BebasNeue Regular",
                    "raw": "\"BebasNeue Regular\""
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
                      "value": 244,
                      "raw": "244"
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
                                "name": "swrs"
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
                        "value": 244,
                        "raw": "244"
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
                                "name": "swrs"
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
                    "operator": "+",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 180,
                      "raw": "180"
                    },
                    "right": {
                      "type": "TableConstructorExpression",
                      "fields": [
                        {
                          "type": "TableValue",
                          "value": {
                            "type": "Identifier",
                            "name": "swrs"
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
                    "name": "Triangle"
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
                    "value": 30,
                    "raw": "30"
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
                    "value": 30,
                    "raw": "30"
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
                    "value": "#4d9ffb",
                    "raw": "\"#4d9ffb\""
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
                    "name": "sw_reset"
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
                      "value": 238,
                      "raw": "238"
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
                                "name": "swrs"
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
                        "value": 238,
                        "raw": "238"
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
                                "name": "swrs"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "swh"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "TableConstructorExpression",
                        "fields": [
                          {
                            "type": "TableValue",
                            "value": {
                              "type": "Identifier",
                              "name": "swh"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "",
                      "raw": "\"\""
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
                    "name": "BebasNeue"
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
                      "value": 198,
                      "raw": "198"
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
                                "name": "swrs"
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
                        "value": 198,
                        "raw": "198"
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
                                "name": "swrs"
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
                          "name": "swrs"
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
                    "name": "Triangle"
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
                    "value": 30,
                    "raw": "30"
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
                    "value": 30,
                    "raw": "30"
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
                    "value": "#4d9ffb",
                    "raw": "\"#4d9ffb\""
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
                    "name": "sw_start_stop"
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
                      "value": 192,
                      "raw": "192"
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
                                "name": "swrs"
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
                        "value": 192,
                        "raw": "192"
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
                                "name": "swrs"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "swm"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "TableConstructorExpression",
                        "fields": [
                          {
                            "type": "TableValue",
                            "value": {
                              "type": "Identifier",
                              "name": "swm"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "",
                      "raw": "\"\""
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
                    "value": 14,
                    "raw": "14"
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
                    "name": "BebasNeue"
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
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 250,
                      "raw": "250"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 40,
                          "raw": "40"
                        },
                        "right": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "bl"
                              }
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
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
                      "name": "hand_minute_1"
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
                    "value": 420,
                    "raw": "420"
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
                    "value": 420,
                    "raw": "420"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "bl"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 50,
                          "raw": "50"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "..",
                        "left": {
                          "type": "CallExpression",
                          "base": {
                            "type": "Identifier",
                            "name": "hexa2"
                          },
                          "arguments": [
                            {
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
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "NumericLiteral",
                                        "value": 100,
                                        "raw": "100"
                                      },
                                      "right": {
                                        "type": "TableConstructorExpression",
                                        "fields": [
                                          {
                                            "type": "TableValue",
                                            "value": {
                                              "type": "Identifier",
                                              "name": "bl"
                                            }
                                          }
                                        ]
                                      },
                                      "inParens": true
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 255,
                                      "raw": "255"
                                    }
                                  },
                                  "right": {
                                    "type": "NumericLiteral",
                                    "value": 50,
                                    "raw": "50"
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "right": {
                          "type": "StringLiteral",
                          "value": "ff00",
                          "raw": "\"ff00\""
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "..",
                      "left": {
                        "type": "StringLiteral",
                        "value": "ff",
                        "raw": "\"ff\""
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "..",
                        "left": {
                          "type": "CallExpression",
                          "base": {
                            "type": "Identifier",
                            "name": "hexa2"
                          },
                          "arguments": [
                            {
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
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "TableConstructorExpression",
                                      "fields": [
                                        {
                                          "type": "TableValue",
                                          "value": {
                                            "type": "Identifier",
                                            "name": "bl"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 255,
                                      "raw": "255"
                                    }
                                  },
                                  "right": {
                                    "type": "NumericLiteral",
                                    "value": 50,
                                    "raw": "50"
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "right": {
                          "type": "StringLiteral",
                          "value": "00",
                          "raw": "\"00\""
                        }
                      }
                    }
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
                    "value": 1,
                    "raw": "1"
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
                    "operator": "-",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 110,
                      "raw": "110"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 40,
                          "raw": "40"
                        },
                        "right": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "pbl"
                              }
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
                      }
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
                      "name": "hand_minute_1"
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
                    "value": 420,
                    "raw": "420"
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
                    "value": 420,
                    "raw": "420"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "pbl"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 50,
                          "raw": "50"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "..",
                        "left": {
                          "type": "CallExpression",
                          "base": {
                            "type": "Identifier",
                            "name": "hexa2"
                          },
                          "arguments": [
                            {
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
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "NumericLiteral",
                                        "value": 100,
                                        "raw": "100"
                                      },
                                      "right": {
                                        "type": "TableConstructorExpression",
                                        "fields": [
                                          {
                                            "type": "TableValue",
                                            "value": {
                                              "type": "Identifier",
                                              "name": "pbl"
                                            }
                                          }
                                        ]
                                      },
                                      "inParens": true
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 255,
                                      "raw": "255"
                                    }
                                  },
                                  "right": {
                                    "type": "NumericLiteral",
                                    "value": 50,
                                    "raw": "50"
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "right": {
                          "type": "StringLiteral",
                          "value": "ff00",
                          "raw": "\"ff00\""
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "..",
                      "left": {
                        "type": "StringLiteral",
                        "value": "ff",
                        "raw": "\"ff\""
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "..",
                        "left": {
                          "type": "CallExpression",
                          "base": {
                            "type": "Identifier",
                            "name": "hexa2"
                          },
                          "arguments": [
                            {
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
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "TableConstructorExpression",
                                      "fields": [
                                        {
                                          "type": "TableValue",
                                          "value": {
                                            "type": "Identifier",
                                            "name": "pbl"
                                          }
                                        }
                                      ]
                                    },
                                    "right": {
                                      "type": "NumericLiteral",
                                      "value": 255,
                                      "raw": "255"
                                    }
                                  },
                                  "right": {
                                    "type": "NumericLiteral",
                                    "value": 50,
                                    "raw": "50"
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "right": {
                          "type": "StringLiteral",
                          "value": "00",
                          "raw": "\"00\""
                        }
                      }
                    }
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
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
                                  "name": "dh"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 60,
                          "raw": "60"
                        }
                      }
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 60,
                          "raw": "60"
                        },
                        "inParens": true
                      }
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
                      "name": "hand_minute_1"
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
                    "value": 430,
                    "raw": "430"
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
                    "value": 430,
                    "raw": "430"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "==",
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
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 120,
                          "raw": "120"
                        }
                      }
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 120,
                          "raw": "120"
                        },
                        "inParens": true
                      }
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
                      "name": "hand_minute_1"
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
                    "value": 430,
                    "raw": "430"
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
                    "value": 430,
                    "raw": "430"
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
                    "value": "#4629a1",
                    "raw": "\"#4629a1\""
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
                    "name": "n"
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
                          "type": "BinaryExpression",
                          "operator": "%",
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
                    "type": "StringLiteral",
                    "value": "speed             demon",
                    "raw": "\"speed             demon\""
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
                    "type": "StringLiteral",
                    "value": "Air Americana",
                    "raw": "\"Air Americana\""
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
                    "value": "#ffffff",
                    "raw": "\"#ffffff\""
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
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "hexa1"
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
                  "type": "LocalStatement",
                  "variables": [
                    {
                      "type": "Identifier",
                      "name": "k"
                    }
                  ],
                  "init": [
                    {
                      "type": "StringLiteral",
                      "value": "",
                      "raw": "\"\""
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
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 10,
                          "raw": "10"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "Identifier",
                              "name": "x"
                            }
                          ]
                        }
                      ]
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 10,
                          "raw": "10"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "a",
                              "raw": "\"a\""
                            }
                          ]
                        }
                      ]
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 11,
                          "raw": "11"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "b",
                              "raw": "\"b\""
                            }
                          ]
                        }
                      ]
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 12,
                          "raw": "12"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "c",
                              "raw": "\"c\""
                            }
                          ]
                        }
                      ]
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 13,
                          "raw": "13"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "d",
                              "raw": "\"d\""
                            }
                          ]
                        }
                      ]
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 14,
                          "raw": "14"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "e",
                              "raw": "\"e\""
                            }
                          ]
                        }
                      ]
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 15,
                          "raw": "15"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "f",
                              "raw": "\"f\""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "ReturnStatement",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "k"
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
              "type": "Identifier",
              "name": "hexa2"
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
                      "type": "BinaryExpression",
                      "operator": "..",
                      "left": {
                        "type": "CallExpression",
                        "base": {
                          "type": "Identifier",
                          "name": "hexa1"
                        },
                        "arguments": [
                          {
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
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 16,
                                  "raw": "16"
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "right": {
                        "type": "CallExpression",
                        "base": {
                          "type": "Identifier",
                          "name": "hexa1"
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "Identifier",
                              "name": "x"
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 16,
                              "raw": "16"
                            }
                          }
                        ]
                      }
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
              "type": "Identifier",
              "name": "weekday"
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
                  "type": "LocalStatement",
                  "variables": [
                    {
                      "type": "Identifier",
                      "name": "k"
                    }
                  ],
                  "init": [
                    {
                      "type": "StringLiteral",
                      "value": "",
                      "raw": "\"\""
                    }
                  ]
                },
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
                      "operator": "%",
                      "left": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 7,
                        "raw": "7"
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "SUN",
                              "raw": "\"SUN\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "MON",
                              "raw": "\"MON\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "TUE",
                              "raw": "\"TUE\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "WED",
                              "raw": "\"WED\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "THU",
                              "raw": "\"THU\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "FRI",
                              "raw": "\"FRI\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 6,
                          "raw": "6"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "SAT",
                              "raw": "\"SAT\""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "ReturnStatement",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "k"
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
              "type": "Identifier",
              "name": "month"
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
                  "type": "LocalStatement",
                  "variables": [
                    {
                      "type": "Identifier",
                      "name": "k"
                    }
                  ],
                  "init": [
                    {
                      "type": "StringLiteral",
                      "value": "",
                      "raw": "\"\""
                    }
                  ]
                },
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
                      "operator": "%",
                      "left": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 12,
                        "raw": "12"
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
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "DEC",
                              "raw": "\"DEC\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "JAN",
                              "raw": "\"JAN\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "FEB",
                              "raw": "\"FEB\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "MAR",
                              "raw": "\"MAR\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
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
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "APR",
                              "raw": "\"APR\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "MAY",
                              "raw": "\"MAY\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 6,
                          "raw": "6"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "JUN",
                              "raw": "\"JUN\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 7,
                          "raw": "7"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "JUL",
                              "raw": "\"JUL\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "AUG",
                              "raw": "\"AUG\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 9,
                          "raw": "9"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "SEP",
                              "raw": "\"SEP\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 10,
                          "raw": "10"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "OCT",
                              "raw": "\"OCT\""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "ElseifClause",
                      "condition": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 11,
                          "raw": "11"
                        }
                      },
                      "body": [
                        {
                          "type": "AssignmentStatement",
                          "variables": [
                            {
                              "type": "Identifier",
                              "name": "k"
                            }
                          ],
                          "init": [
                            {
                              "type": "StringLiteral",
                              "value": "NOV",
                              "raw": "\"NOV\""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "ReturnStatement",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "k"
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