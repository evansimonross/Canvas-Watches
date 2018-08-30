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
          "name": "Layer 1",
          "type": "image",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "{drh24}",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "50",
          "alignment": "cc",
          "path": ".img200.jpg",
          "width": "835",
          "height": "523",
          "color": "ffffff",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "-85*math.sin({drm}*2)",
          "y": "85*math.cos({drm}*2)",
          "gyro": "0",
          "rotation": "-({drss}*4)%360",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 1 and 100 or 0",
          "alignment": "cc",
          "shape": "Circle",
          "width": "36",
          "height": "36",
          "color": "e3ff00",
          "display": "bd",
          "tap_action": "m_update_weather",
          "shader": "GradientLinear",
          "u_1": "d2c200",
          "u_2": "544900",
          "u_3": "40",
          "u_4": "101"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "-65*math.cos({drm}*3)",
          "y": "65*math.sin({drm}*3)",
          "gyro": "0",
          "rotation": "({drss}*4)%360",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 1 and 100 or 0",
          "alignment": "cc",
          "shape": "Circle",
          "width": "20",
          "height": "20",
          "color": "995b00",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "978b00",
          "u_2": "540000",
          "u_3": "40",
          "u_4": "101"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "228*math.sin({drh}+(12*math.cos({drss}%180)))-3*math.sin({drss}%180)",
          "y": "-228*math.cos({drh}+(12*math.cos({drss}%180)))-3*math.sin({drss}%180)",
          "gyro": "0",
          "rotation": "{drss}*3",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "(var_screen == 1 and 100) or (var_screen == 4 and 100) or 0",
          "alignment": "cc",
          "shape": "Circle",
          "width": "15",
          "height": "15",
          "color": "b9b9b9",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "aaaaaa",
          "u_2": "3a3a3a",
          "u_3": "40",
          "u_4": "101"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "225*math.sin({drh})",
          "y": "-225*math.cos({drh})",
          "gyro": "0",
          "rotation": "({drss}*2)%360",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "(var_screen == 1 and 100) or (var_screen == 4 and 100) or 0",
          "alignment": "cc",
          "shape": "Circle",
          "width": "40",
          "height": "40",
          "color": "ff0000",
          "display": "bd",
          "tap_action": "script:if var_screen == 4 then var_screen = 1\nelse var_screen = 4 end",
          "shader": "GradientLinear",
          "u_1": "ffb5b5",
          "u_2": "9e1a00",
          "u_3": "40",
          "u_4": "101"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "228*math.sin({drh}-(12*math.cos({drss}%180)))+3*math.sin({drss}%180)",
          "y": "-228*math.cos({drh}-(12*math.cos({drss}%180)))+3*math.sin({drss}%180)",
          "gyro": "0",
          "rotation": "{drss}*3",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "(var_screen == 1 and 100) or (var_screen == 4 and 100) or 0",
          "alignment": "cc",
          "shape": "Circle",
          "width": "15",
          "height": "15",
          "color": "b9b9b9",
          "display": "bd",
          "shader": "GradientLinear",
          "u_1": "aaaaaa",
          "u_2": "3a3a3a",
          "u_3": "40",
          "u_4": "101"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "150*math.sin({drm})",
          "y": "-150*math.cos({drm})",
          "gyro": "0",
          "rotation": "({drss}*3)%360",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "50",
          "height": "50",
          "color": "00ffc4",
          "display": "bd",
          "tap_action": "script:if var_screen == 2 then var_screen = 0\nelse var_screen = 2 end",
          "shader": "GradientLinear",
          "u_1": "00be70",
          "u_2": "00a1ff",
          "u_3": "40",
          "u_4": "100"
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
          "width": "100",
          "height": "100",
          "color": "ffa200",
          "display": "bd",
          "tap_action": "script:if var_screen == 0 then var_screen = 1\nelse var_screen = 0 end",
          "shader": "GradientRadial",
          "u_1": "ff6b00",
          "u_2": "ffe400",
          "u_3": "70"
        }
      },
      {
        "_attributes": {
          "type": "shape",
          "x": "150*math.sin({drm}) + 60*math.sin({drss})",
          "y": "-150*math.cos({drm}) - 60*math.cos({drss})",
          "gyro": "0",
          "rotation": "{drss}",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "100",
          "alignment": "cc",
          "shape": "Circle",
          "width": "35",
          "height": "35",
          "color": "ffc4d7",
          "display": "bd",
          "tap_action": "script:if var_screen == 3 then var_screen = 0\nelse var_screen = 3 end",
          "shader": "GradientLinear",
          "u_1": "ffc4d7",
          "u_2": "4a4a4a",
          "u_3": "180",
          "u_4": "100"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 0 and 100 or 0",
          "alignment": "cc",
          "text": "{dh}",
          "text_size": "40",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "150*math.sin({drm})",
          "y": "-150*math.cos({drm})",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 0 and 100 or 0",
          "alignment": "cc",
          "text": "{dm}",
          "text_size": "18",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "150*math.sin({drm}) + 60*math.sin({drss})",
          "y": "-150*math.cos({drm}) - 60*math.cos({drss})",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 0 and 100 or 0",
          "alignment": "cc",
          "text": "{DS}",
          "text_size": "13",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "b"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "150*math.sin({drm})",
          "y": "-150*math.cos({drm})",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 2 and 100 or 0",
          "alignment": "cc",
          "text": "{wt}",
          "text_size": "18",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "150*math.sin({drm}) + 60*math.sin({drss})",
          "y": "-150*math.cos({drm}) - 60*math.cos({drss})",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 2 and 100 or 0",
          "alignment": "cc",
          "text": "°{wm}",
          "text_size": "13",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "image_cond",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 2 and 100 or 0",
          "alignment": "cc",
          "path": "weather_set_2.png",
          "width": "90",
          "height": "90",
          "color": "000000",
          "cond_value": "'{wci}' == '01d' and 1 or '{wci}' == '02d' and 2 or '{wci}' == '03d' and 3 or '{wci}' == '04d' and 4 or '{wci}' == '09d' and 5 or '{wci}' == '10d' and 6 or '{wci}' == '11d' and 7 or '{wci}' == '13d' and 8 or '{wci}' == '50d' and 9 or 1",
          "cond_grid": "3x3",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "0",
          "y": "0",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 3 and 100 or 0",
          "alignment": "cc",
          "text": "{ddw}",
          "text_size": "25",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "150*math.sin({drm})",
          "y": "-150*math.cos({drm})",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 3 and 100 or 0",
          "alignment": "cc",
          "text": "{dnnn}",
          "text_size": "13",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "150*math.sin({drm}) + 60*math.sin({drss})",
          "y": "-150*math.cos({drm}) - 60*math.cos({drss})",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 3 and 100 or 0",
          "alignment": "cc",
          "text": "{dd}",
          "text_size": "13",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "225*math.sin({drh})",
          "y": "-225*math.cos({drh})",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 4 and 100 or 0",
          "alignment": "cc",
          "text": "{pblp}",
          "text_size": "10",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
          "display": "bd"
        }
      },
      {
        "_attributes": {
          "type": "text",
          "x": "150*math.sin({drm})",
          "y": "-150*math.cos({drm})",
          "gyro": "0",
          "rotation": "0",
          "skew_x": "0",
          "skew_y": "0",
          "opacity": "var_screen == 4 and 100 or 0",
          "alignment": "cc",
          "text": "{blp}",
          "text_size": "13",
          "anim_scale_x": "100",
          "anim_scale_y": "100",
          "font": "pirulen",
          "transform": "n",
          "color_dim": "000000",
          "color": "000000",
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