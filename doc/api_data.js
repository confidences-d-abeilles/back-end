define({ "api": [
  {
    "type": "get",
    "url": "/getJwt",
    "title": "Generate a new Jwt",
    "name": "GetJwt",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "401",
          "content": "HTTP 401 Invalid credentials",
          "type": "json"
        },
        {
          "title": "400",
          "content": "HTTP 400 Missing parameters",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Newly created token</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/user.js",
    "groupTitle": "User"
  }
] });
