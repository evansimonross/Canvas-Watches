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
          "type": "shape",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "440",
          "height": "440",
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
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "400",
          "height": "400",
          "color": "\"#000000\"",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
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
          "alignment": "cc",
          "shape": "Circle",
          "width": "335",
          "height": "335",
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
          "display": "b",
          "shader": "Segment",
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
          "u_2": "100",
          "u_3": "0"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "295",
          "height": "295",
          "color": "\"#000000\"",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "230",
          "height": "230",
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
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "190",
          "height": "190",
          "color": "\"#000000\"",
          "display": "bd",
          "tap_action": "script:var_screen = var_screen + 1\nif var_screen > 1 then var_screen = 0 end"
        }
      },
      {
        "_attributes": {
          "type": "markers_hm",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "radius": "256",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "m_hour": "Circle",
          "m_minute": "None",
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
          "color2": "\"#ffffff\"",
          "squarify": "0",
          "display": "bd"
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
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Square",
          "width": "20",
          "height": "148",
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
          "display": "bd"
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
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Square",
          "width": "21",
          "height": "21",
          "color": "\"#010003\"",
          "display": "bd"
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
          "alignment": "cc",
          "shape": "Square",
          "width": "21",
          "height": "21",
          "color": "\"#010003\"",
          "display": "bd"
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
          "alignment": "cc",
          "shape": "Square",
          "width": "21",
          "height": "21",
          "color": "\"#010003\"",
          "display": "bd"
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
          "alignment": "cc",
          "shape": "Square",
          "width": "21",
          "height": "21",
          "color": "\"#010003\"",
          "display": "bd"
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
          "alignment": "cc",
          "shape": "Square",
          "width": "21",
          "height": "21",
          "color": "\"#010003\"",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "markers",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
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
          "radius": "195",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "m_width": "20",
          "m_height": "20",
          "m_count": "4",
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
          "shape": "Circle",
          "squarify": "0",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "markers",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
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
          "radius": "140",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "m_width": "20",
          "m_height": "20",
          "m_count": "10",
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
          "shape": "Circle",
          "squarify": "0",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "markers",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
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
          "radius": "37",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "m_width": "20",
          "m_height": "20",
          "m_count": "6",
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
          "shape": "Circle",
          "squarify": "0",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
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
          "alignment": "cc",
          "shape": "Circle",
          "width": "20",
          "height": "20",
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
          "display": "bd"
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
          "gyro": "0",
          "rotation": "0",
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
          "alignment": "cc",
          "shape": "Circle",
          "width": "17",
          "height": "17",
          "color": "\"#010000\"",
          "display": "bd"
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
          "gyro": "0",
          "rotation": "0",
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
          "alignment": "cc",
          "shape": "Circle",
          "width": "17",
          "height": "17",
          "color": "\"#010000\"",
          "display": "bd"
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
          "gyro": "0",
          "rotation": "0",
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
          "alignment": "cc",
          "shape": "Circle",
          "width": "17",
          "height": "17",
          "color": "\"#010000\"",
          "display": "bd"
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
          "gyro": "0",
          "rotation": "0",
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
          "alignment": "cc",
          "shape": "Circle",
          "width": "17",
          "height": "17",
          "color": "\"#010000\"",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
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
          "alignment": "cc",
          "shape": "Circle",
          "width": "17",
          "height": "17",
          "color": "\"#010000\"",
          "display": "bd"
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