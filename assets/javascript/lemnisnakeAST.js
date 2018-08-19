var watch = {
  "Watch": {
    "_attributes": {
      "name": "Lemnisnake",
      "description": "",
      "tags": "12h,digital",
      "features": "12h Time,Digital,Smooth Seconds",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 24,
                              "raw": "24"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 24,
                                  "raw": "24"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 24,
                                "raw": "24"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#ea4d95\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 48,
                              "raw": "48"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 48,
                                  "raw": "48"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 48,
                                "raw": "48"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#d94da6\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 72,
                              "raw": "72"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 72,
                                  "raw": "72"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 72,
                                "raw": "72"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#c84db7\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 96,
                              "raw": "96"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 96,
                                  "raw": "96"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 96,
                                "raw": "96"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#b74dc8\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 120,
                              "raw": "120"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 120,
                                  "raw": "120"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 120,
                                "raw": "120"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#a64dd9\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                          "value": 6,
                          "raw": "6"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 144,
                              "raw": "144"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                          "value": 6,
                          "raw": "6"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 144,
                                  "raw": "144"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 144,
                                "raw": "144"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#954dea\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 168,
                              "raw": "168"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 168,
                                  "raw": "168"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 168,
                                "raw": "168"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#844dfb\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 192,
                              "raw": "192"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 192,
                                  "raw": "192"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 192,
                                "raw": "192"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#733cfc\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 216,
                              "raw": "216"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 216,
                                  "raw": "216"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 216,
                                "raw": "216"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#622bfd\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 240,
                              "raw": "240"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 240,
                                  "raw": "240"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 240,
                                "raw": "240"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#511afe\"",
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 200,
                          "raw": "200"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 200,
                        "raw": "200"
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
                                "value": 10,
                                "raw": "10"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 264,
                              "raw": "264"
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
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<=",
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
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "NumericLiteral",
                              "value": 100,
                              "raw": "100"
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
                                    "type": "NumericLiteral",
                                    "value": 10,
                                    "raw": "10"
                                  }
                                }
                              ]
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
                                        "name": "drss"
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
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "NumericLiteral",
                            "value": 100,
                            "raw": "100"
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
                                    "value": 10,
                                    "raw": "10"
                                  }
                                },
                                "right": {
                                  "type": "NumericLiteral",
                                  "value": 264,
                                  "raw": "264"
                                }
                              }
                            ]
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
                              "operator": "+",
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
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 264,
                                "raw": "264"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#4009ff\"",
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
                      "value": 200,
                      "raw": "200"
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
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                                "type": "NumericLiteral",
                                "value": 10,
                                "raw": "10"
                              }
                            }
                          ]
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
                                    "name": "drss"
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
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#fb4d84\"",
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
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                                "type": "NumericLiteral",
                                "value": 15,
                                "raw": "15"
                              }
                            }
                          ]
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
                                    "name": "drss"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 15,
                              "raw": "15"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
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
                              "type": "NumericLiteral",
                              "value": 15,
                              "raw": "15"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmt"
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
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#4daafb\"",
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
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
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
                                "value": 15,
                                "raw": "15"
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
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
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
                                "value": 15,
                                "raw": "15"
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
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmt"
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
          "width": "35",
          "height": "35",
          "color": "\"#5e99fb\"",
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
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 72,
                                "raw": "72"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 72,
                              "raw": "72"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 72,
                              "raw": "72"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmt"
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
          "width": "35",
          "height": "35",
          "color": "\"#6f88fb\"",
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
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 108,
                                "raw": "108"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 108,
                              "raw": "108"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 108,
                              "raw": "108"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmt"
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
          "width": "35",
          "height": "35",
          "color": "\"#7f77fb\"",
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
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 100,
                          "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 144,
                                "raw": "144"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 144,
                              "raw": "144"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "type": "NumericLiteral",
                        "value": 100,
                        "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 144,
                              "raw": "144"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmt"
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
          "width": "35",
          "height": "35",
          "color": "\"#8f66fb\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                "type": "NumericLiteral",
                                "value": 15,
                                "raw": "15"
                              }
                            }
                          ]
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
                                    "name": "drss"
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 15,
                              "raw": "15"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                              "type": "NumericLiteral",
                              "value": 15,
                              "raw": "15"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
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
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "\"#4dfb85\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
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
                                "value": 15,
                                "raw": "15"
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
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                                "value": 15,
                                "raw": "15"
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
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
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
          "width": "35",
          "height": "35",
          "color": "\"#4dea96\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 72,
                                "raw": "72"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 72,
                              "raw": "72"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 72,
                              "raw": "72"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
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
          "width": "35",
          "height": "35",
          "color": "\"#4dd9a7\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 108,
                                "raw": "108"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 108,
                              "raw": "108"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 108,
                              "raw": "108"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
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
          "width": "35",
          "height": "35",
          "color": "\"#4dc8b8\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 144,
                                "raw": "144"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 144,
                              "raw": "144"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 144,
                              "raw": "144"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
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
          "width": "35",
          "height": "35",
          "color": "\"#4db7c9\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 180,
                                "raw": "180"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 180,
                              "raw": "180"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 180,
                              "raw": "180"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
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
          "width": "35",
          "height": "35",
          "color": "\"#4da6da\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 216,
                                "raw": "216"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 216,
                              "raw": "216"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 216,
                              "raw": "216"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 6,
                          "raw": "6"
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
          "width": "35",
          "height": "35",
          "color": "\"#4d95eb\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 252,
                                "raw": "252"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 252,
                              "raw": "252"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 252,
                              "raw": "252"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 7,
                          "raw": "7"
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
          "width": "35",
          "height": "35",
          "color": "\"#4d84fc\"",
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
                    "operator": "+",
                    "left": {
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
                            "value": 100,
                            "raw": "100"
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
                                  "value": 15,
                                  "raw": "15"
                                }
                              },
                              "right": {
                                "type": "NumericLiteral",
                                "value": 288,
                                "raw": "288"
                              }
                            }
                          ]
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
                            "operator": "+",
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 288,
                              "raw": "288"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                          "value": 100,
                          "raw": "100"
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
                                "value": 15,
                                "raw": "15"
                              }
                            },
                            "right": {
                              "type": "NumericLiteral",
                              "value": 288,
                              "raw": "288"
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 75,
                      "raw": "75"
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
                        "operator": ">",
                        "left": {
                          "type": "TableConstructorExpression",
                          "fields": [
                            {
                              "type": "TableValue",
                              "value": {
                                "type": "Identifier",
                                "name": "dmo"
                              }
                            }
                          ]
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 8,
                          "raw": "8"
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
          "width": "35",
          "height": "35",
          "color": "\"#4d73fd\"",
          "display": "bd"
        }
      }
    ],
    "Script": {
      "type": "Chunk",
      "body": [
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