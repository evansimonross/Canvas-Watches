var watch = {
  "Watch": {
    "_attributes": {
      "name": "Rays",
      "description": "",
      "tags": "12h,digital",
      "features": "12h Time,Digital",
      "shape": "R",
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
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "NumericLiteral",
                            "value": 79,
                            "raw": "79"
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
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "NumericLiteral",
                            "value": 79,
                            "raw": "79"
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
                    "value": 101,
                    "raw": "101"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#4629a1",
                    "raw": "\"#4629a1\""
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
                          "operator": ">",
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
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                            "value": 7,
                            "raw": "7"
                          }
                        }
                      },
                      "right": {
                        "type": "StringLiteral",
                        "value": "d6e8f8",
                        "raw": "'d6e8f8'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "NumericLiteral",
                            "value": 47.4,
                            "raw": "47.4"
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
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "NumericLiteral",
                            "value": 47.4,
                            "raw": "47.4"
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
                    "value": 132.6,
                    "raw": "132.6"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#4629a1",
                    "raw": "\"#4629a1\""
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
                          "operator": ">",
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
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                            "value": 8,
                            "raw": "8"
                          }
                        }
                      },
                      "right": {
                        "type": "StringLiteral",
                        "value": "d6e8f8",
                        "raw": "'d6e8f8'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "NumericLiteral",
                            "value": 15.8,
                            "raw": "15.8"
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
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "NumericLiteral",
                            "value": 15.8,
                            "raw": "15.8"
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
                    "value": 164.2,
                    "raw": "164.2"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#4629a1",
                    "raw": "\"#4629a1\""
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
                          "operator": ">",
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
                          "type": "BinaryExpression",
                          "operator": "<",
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
                            "value": 9,
                            "raw": "9"
                          }
                        }
                      },
                      "right": {
                        "type": "StringLiteral",
                        "value": "d6e8f8",
                        "raw": "'d6e8f8'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "NumericLiteral",
                          "value": 15.8,
                          "raw": "15.8"
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
                          "type": "NumericLiteral",
                          "value": 15.8,
                          "raw": "15.8"
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
                    "value": 195.8,
                    "raw": "195.8"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#4629a1",
                    "raw": "\"#4629a1\""
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
                          "operator": ">",
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
                            "value": 3,
                            "raw": "3"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                            "value": 10,
                            "raw": "10"
                          }
                        }
                      },
                      "right": {
                        "type": "StringLiteral",
                        "value": "d6e8f8",
                        "raw": "'d6e8f8'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "NumericLiteral",
                          "value": 47.4,
                          "raw": "47.4"
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
                          "type": "NumericLiteral",
                          "value": 47.4,
                          "raw": "47.4"
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
                    "value": 227.4,
                    "raw": "227.4"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#4629a1",
                    "raw": "\"#4629a1\""
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
                          "operator": ">",
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
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                            "value": 11,
                            "raw": "11"
                          }
                        }
                      },
                      "right": {
                        "type": "StringLiteral",
                        "value": "d6e8f8",
                        "raw": "'d6e8f8'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "NumericLiteral",
                          "value": 79,
                          "raw": "79"
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
                          "type": "NumericLiteral",
                          "value": 79,
                          "raw": "79"
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
                    "value": 259,
                    "raw": "259"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#4629a1",
                    "raw": "\"#4629a1\""
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
                          "operator": ">",
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
                            "value": 5,
                            "raw": "5"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                        }
                      },
                      "right": {
                        "type": "StringLiteral",
                        "value": "d6e8f8",
                        "raw": "'d6e8f8'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "NumericLiteral",
                          "value": 243.2,
                          "raw": "243.2"
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
                          "type": "NumericLiteral",
                          "value": 243.2,
                          "raw": "243.2"
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
                    "value": 63.2,
                    "raw": "63.2"
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
                    "value": 45,
                    "raw": "45"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                          "operator": ">",
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
                              "value": 10,
                              "raw": "10"
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
                          "operator": "<",
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
                              "value": 10,
                              "raw": "10"
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
                        "type": "StringLiteral",
                        "value": "fac4c4",
                        "raw": "'fac4c4'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "NumericLiteral",
                          "value": 211.6,
                          "raw": "211.6"
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
                          "type": "NumericLiteral",
                          "value": 211.6,
                          "raw": "211.6"
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
                    "value": 31.6,
                    "raw": "31.6"
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
                    "value": 45,
                    "raw": "45"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                          "operator": ">",
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
                              "value": 10,
                              "raw": "10"
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
                          "operator": "<",
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
                              "value": 10,
                              "raw": "10"
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
                        "type": "StringLiteral",
                        "value": "fac4c4",
                        "raw": "'fac4c4'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "NumericLiteral",
                          "value": 180,
                          "raw": "180"
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
                          "type": "NumericLiteral",
                          "value": 180,
                          "raw": "180"
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
                    "value": 45,
                    "raw": "45"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                          "operator": ">",
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
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                              "value": 10,
                              "raw": "10"
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
                        "type": "StringLiteral",
                        "value": "fac4c4",
                        "raw": "'fac4c4'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "NumericLiteral",
                          "value": 148.4,
                          "raw": "148.4"
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
                          "type": "NumericLiteral",
                          "value": 148.4,
                          "raw": "148.4"
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
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 31.6,
                      "raw": "31.6"
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
                    "value": 45,
                    "raw": "45"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                          "operator": ">",
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
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 3,
                            "raw": "3"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                              "value": 10,
                              "raw": "10"
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
                        "type": "StringLiteral",
                        "value": "fac4c4",
                        "raw": "'fac4c4'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "NumericLiteral",
                          "value": 116.8,
                          "raw": "116.8"
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
                          "type": "NumericLiteral",
                          "value": 116.8,
                          "raw": "116.8"
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
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 63.2,
                      "raw": "63.2"
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
                    "value": 45,
                    "raw": "45"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                          "operator": ">",
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
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "<",
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
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "right": {
                            "type": "NumericLiteral",
                            "value": 10,
                            "raw": "10"
                          }
                        }
                      },
                      "right": {
                        "type": "StringLiteral",
                        "value": "fac4c4",
                        "raw": "'fac4c4'"
                      }
                    },
                    "right": {
                      "type": "StringLiteral",
                      "value": "000000",
                      "raw": "'000000'"
                    }
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
                          "type": "IndexExpression",
                          "base": {
                            "type": "Identifier",
                            "name": "var_tens"
                          },
                          "index": {
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
                                        "name": "dm"
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
                          "type": "IndexExpression",
                          "base": {
                            "type": "Identifier",
                            "name": "var_tens"
                          },
                          "index": {
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
                                        "name": "dm"
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
                    "operator": "+",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 180,
                      "raw": "180"
                    },
                    "right": {
                      "type": "IndexExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "var_tens"
                      },
                      "index": {
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
                                    "name": "dm"
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
                        "operator": "~=",
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
                                      "name": "dm"
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
                    "value": 45,
                    "raw": "45"
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
                    "value": 300,
                    "raw": "300"
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
                    "value": "#be1717",
                    "raw": "\"#be1717\""
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
                    "value": "#fac4c4",
                    "raw": "\"#fac4c4\""
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
                    "value": "#000000",
                    "raw": "\"#000000\""
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
                    "value": 70,
                    "raw": "70"
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
              "type": "Identifier",
              "name": "var_tens"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 63.2,
                      "raw": "63.2"
                    }
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 31.6,
                      "raw": "31.6"
                    }
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "NumericLiteral",
                    "value": 31.6,
                    "raw": "31.6"
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "NumericLiteral",
                    "value": 63.2,
                    "raw": "63.2"
                  }
                }
              ]
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