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
          "type": "shape",
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
          "gyro": "0",
          "rotation": "101",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "100",
          "height": "300",
          "color": "4629a1",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "4629a1",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
          "rotation": "132.6",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "100",
          "height": "300",
          "color": "4629a1",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "4629a1",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
          "rotation": "164.2",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "100",
          "height": "300",
          "color": "4629a1",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "4629a1",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
          "rotation": "195.8",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "100",
          "height": "300",
          "color": "4629a1",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "4629a1",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
          "rotation": "227.4",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "100",
          "height": "300",
          "color": "4629a1",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "4629a1",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
          "rotation": "259",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "100",
          "height": "300",
          "color": "4629a1",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "4629a1",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
          "rotation": "63.2",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "45",
          "height": "300",
          "color": "be1717",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "be1717",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
          "rotation": "31.6",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "45",
          "height": "300",
          "color": "be1717",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "be1717",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "45",
          "height": "300",
          "color": "be1717",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "be1717",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
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
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "45",
          "height": "300",
          "color": "be1717",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "be1717",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
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
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Triangle",
          "width": "45",
          "height": "300",
          "color": "be1717",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "be1717",
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
          "u_3": "0",
          "u_4": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
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
          "gyro": "0",
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
          "skew_x": "0",
          "skew_y": "0",
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
          "alignment": "cc",
          "shape": "Triangle",
          "width": "45",
          "height": "300",
          "color": "be1717",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "fac4c4",
          "u_2": "000000",
          "u_3": "0",
          "u_4": "70"
        }
      }
    ]
  }
}