var watch = {
  "Watch": {
    "_attributes": {
      "name": "Teardrop",
      "description": "",
      "tags": "12h,analog,animation,tap,ucolor",
      "features": "12h Time,Analog,Animation,Digital,Smooth Seconds,Tap Actions,Themeable",
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
                "type": "CallStatement",
                "expression": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "tap"
                  },
                  "arguments": []
                }
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
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
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
                    "value": 29,
                    "raw": "29"
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
                    "value": 29,
                    "raw": "29"
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
                      "value": 44,
                      "raw": "44"
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
                                  "name": "drh"
                                }
                              }
                            ]
                          },
                          "right": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "rotate"
                            },
                            "base": {
                              "type": "Identifier",
                              "name": "tweens"
                            }
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
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 44,
                          "raw": "44"
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
                                    "name": "drh"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "MemberExpression",
                              "indexer": ".",
                              "identifier": {
                                "type": "Identifier",
                                "name": "rotate"
                              },
                              "base": {
                                "type": "Identifier",
                                "name": "tweens"
                              }
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
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
                            "name": "drh"
                          }
                        }
                      ]
                    },
                    "right": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "rotate"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
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
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
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
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "anim1"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "tweens"
                        }
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
                    "value": 29,
                    "raw": "29"
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
                    "value": 29,
                    "raw": "29"
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 44,
                            "raw": "44"
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
                                        "name": "drh"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "indexer": ".",
                                  "identifier": {
                                    "type": "Identifier",
                                    "name": "rotate"
                                  },
                                  "base": {
                                    "type": "Identifier",
                                    "name": "tweens"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "anim1"
                            },
                            "base": {
                              "type": "Identifier",
                              "name": "tweens"
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
                                "type": "NumericLiteral",
                                "value": 240,
                                "raw": "240"
                              }
                            ]
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 44,
                          "raw": "44"
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
                                "type": "MemberExpression",
                                "indexer": ".",
                                "identifier": {
                                  "type": "Identifier",
                                  "name": "rotate"
                                },
                                "base": {
                                  "type": "Identifier",
                                  "name": "tweens"
                                }
                              }
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "anim1"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
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
                              "type": "NumericLiteral",
                              "value": 240,
                              "raw": "240"
                            }
                          ]
                        }
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
                              "value": 44,
                              "raw": "44"
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
                                        "name": "drh"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "indexer": ".",
                                  "identifier": {
                                    "type": "Identifier",
                                    "name": "rotate"
                                  },
                                  "base": {
                                    "type": "Identifier",
                                    "name": "tweens"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "anim1"
                            },
                            "base": {
                              "type": "Identifier",
                              "name": "tweens"
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
                      }
                    },
                    "right": {
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
                            "value": 44,
                            "raw": "44"
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
                                "type": "MemberExpression",
                                "indexer": ".",
                                "identifier": {
                                  "type": "Identifier",
                                  "name": "rotate"
                                },
                                "base": {
                                  "type": "Identifier",
                                  "name": "tweens"
                                }
                              }
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "anim1"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
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
                        "type": "BinaryExpression",
                        "operator": "*",
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
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "rotate"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
                          }
                        }
                      }
                    },
                    "right": {
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
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "rotate"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "tweens"
                        }
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
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
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
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "anim1"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "tweens"
                        }
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
                    "value": 29,
                    "raw": "29"
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
                    "value": 29,
                    "raw": "29"
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 44,
                            "raw": "44"
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
                                        "name": "drh"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "indexer": ".",
                                  "identifier": {
                                    "type": "Identifier",
                                    "name": "rotate"
                                  },
                                  "base": {
                                    "type": "Identifier",
                                    "name": "tweens"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "anim1"
                            },
                            "base": {
                              "type": "Identifier",
                              "name": "tweens"
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
                                "type": "NumericLiteral",
                                "value": 120,
                                "raw": "120"
                              }
                            ]
                          }
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 44,
                          "raw": "44"
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
                                      "name": "drss"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "MemberExpression",
                                "indexer": ".",
                                "identifier": {
                                  "type": "Identifier",
                                  "name": "rotate"
                                },
                                "base": {
                                  "type": "Identifier",
                                  "name": "tweens"
                                }
                              }
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "anim1"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
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
                              "type": "NumericLiteral",
                              "value": 120,
                              "raw": "120"
                            }
                          ]
                        }
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
                              "value": 44,
                              "raw": "44"
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
                                        "name": "drh"
                                      }
                                    }
                                  ]
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "indexer": ".",
                                  "identifier": {
                                    "type": "Identifier",
                                    "name": "rotate"
                                  },
                                  "base": {
                                    "type": "Identifier",
                                    "name": "tweens"
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "MemberExpression",
                            "indexer": ".",
                            "identifier": {
                              "type": "Identifier",
                              "name": "anim1"
                            },
                            "base": {
                              "type": "Identifier",
                              "name": "tweens"
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
                      }
                    },
                    "right": {
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
                            "value": 44,
                            "raw": "44"
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
                                      "name": "drss"
                                    }
                                  }
                                ]
                              },
                              "right": {
                                "type": "MemberExpression",
                                "indexer": ".",
                                "identifier": {
                                  "type": "Identifier",
                                  "name": "rotate"
                                },
                                "base": {
                                  "type": "Identifier",
                                  "name": "tweens"
                                }
                              }
                            }
                          ]
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "anim1"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
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
                        "type": "BinaryExpression",
                        "operator": "*",
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
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "rotate"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
                          }
                        }
                      }
                    },
                    "right": {
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
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "rotate"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "tweens"
                        }
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
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 216,
                        "raw": "216"
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
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "anim1"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "tweens"
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
                          "value": 216,
                          "raw": "216"
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
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "anim1"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "tweens"
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
                    "value": 29,
                    "raw": "29"
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
                    "value": 29,
                    "raw": "29"
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
                    "operator": "+",
                    "left": {
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "anim1"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "anim1"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
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
                      "value": 180,
                      "raw": "180"
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
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
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
                    "value": 120,
                    "raw": "120"
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
                    "value": 13,
                    "raw": "13"
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
                    "value": 24,
                    "raw": "24"
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
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
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
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "anim1"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "tweens"
                        }
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
                    "value": 120,
                    "raw": "120"
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
                    "value": 13,
                    "raw": "13"
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
                    "value": 24,
                    "raw": "24"
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
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
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
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "indexer": ".",
                        "identifier": {
                          "type": "Identifier",
                          "name": "anim1"
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "tweens"
                        }
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
                    "value": 120,
                    "raw": "120"
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
                    "value": 13,
                    "raw": "13"
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
                    "value": 24,
                    "raw": "24"
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
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 17,
                      "raw": "17"
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
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "rotate"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                    "value": 13,
                    "raw": "13"
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
                    "value": 24,
                    "raw": "24"
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
                      "type": "NumericLiteral",
                      "value": 17,
                      "raw": "17"
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
                        "type": "NumericLiteral",
                        "value": 17,
                        "raw": "17"
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
                    "value": 120,
                    "raw": "120"
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
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "rotate"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                    "value": 13,
                    "raw": "13"
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
                    "value": 24,
                    "raw": "24"
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
                      "type": "NumericLiteral",
                      "value": 17,
                      "raw": "17"
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
                        "type": "NumericLiteral",
                        "value": 17,
                        "raw": "17"
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
                    "value": 240,
                    "raw": "240"
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
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "MemberExpression",
                          "indexer": ".",
                          "identifier": {
                            "type": "Identifier",
                            "name": "rotate"
                          },
                          "base": {
                            "type": "Identifier",
                            "name": "tweens"
                          }
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                    "value": 13,
                    "raw": "13"
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
                    "value": 24,
                    "raw": "24"
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
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "anim1"
              },
              "base": {
                "type": "Identifier",
                "name": "tweens"
              }
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
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "rotate"
              },
              "base": {
                "type": "Identifier",
                "name": "tweens"
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
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
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "screen_swap"
          },
          "isLocal": false,
          "parameters": [],
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
                  "type": "ElseifClause",
                  "condition": {
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
          ]
        },
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "tap"
          },
          "isLocal": false,
          "parameters": [],
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
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "body": [
                    {
                      "type": "CallStatement",
                      "expression": {
                        "type": "TableCallExpression",
                        "base": {
                          "type": "Identifier",
                          "name": "wm_schedule"
                        },
                        "arguments": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "action"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "tween",
                                      "raw": "'tween'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "tween"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "rotate",
                                      "raw": "'rotate'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "from"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "to"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "duration"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0.4,
                                      "raw": "0.4"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "easing"
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "name": "inOutSine"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "action"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "tween",
                                      "raw": "'tween'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "tween"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "anim1",
                                      "raw": "'anim1'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "from"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "to"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 125,
                                      "raw": "125"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "duration"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0.8,
                                      "raw": "0.8"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "easing"
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "name": "inOutQuad"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "action"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "run_function",
                                      "raw": "'run_function'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "run_function"
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "name": "screen_swap"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "action"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "tween",
                                      "raw": "'tween'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "tween"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "rotate",
                                      "raw": "'rotate'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "from"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "to"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "duration"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0.4,
                                      "raw": "0.4"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "easing"
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "name": "inOutSine"
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
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
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "anim1"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "tweens"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 125,
                      "raw": "125"
                    }
                  },
                  "body": [
                    {
                      "type": "CallStatement",
                      "expression": {
                        "type": "TableCallExpression",
                        "base": {
                          "type": "Identifier",
                          "name": "wm_schedule"
                        },
                        "arguments": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "action"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "tween",
                                      "raw": "'tween'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "tween"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "rotate",
                                      "raw": "'rotate'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "from"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "to"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "duration"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0.4,
                                      "raw": "0.4"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "easing"
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "name": "inOutSine"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "action"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "tween",
                                      "raw": "'tween'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "tween"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "anim1",
                                      "raw": "'anim1'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "from"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 125,
                                      "raw": "125"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "to"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "duration"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0.8,
                                      "raw": "0.8"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "easing"
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "name": "inOutQuad"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "action"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "run_function",
                                      "raw": "'run_function'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "run_function"
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "name": "screen_swap"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "TableConstructorExpression",
                                "fields": [
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "action"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "tween",
                                      "raw": "'tween'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "tween"
                                    },
                                    "value": {
                                      "type": "StringLiteral",
                                      "value": "rotate",
                                      "raw": "'rotate'"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "from"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "to"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "duration"
                                    },
                                    "value": {
                                      "type": "NumericLiteral",
                                      "value": 0.4,
                                      "raw": "0.4"
                                    }
                                  },
                                  {
                                    "type": "TableKeyString",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "easing"
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "name": "inOutSine"
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "wm_schedule",
          "raw": "--wm_schedule"
        }
      ]
    }
  }
}