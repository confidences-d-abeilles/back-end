define({ "api": [
  {
    "type": "get",
    "url": "/auth",
    "title": "Generate a new Jwt",
    "name": "Authenticate",
    "group": "/user",
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
            "field": "accessToken",
            "description": "<p>Newly created access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "renewToken",
            "description": "<p>Newly created renew token</p>"
          }
        ]
      }
    },
    "filename": "src/routers/user.js",
    "groupTitle": "/user"
  },
  {
    "type": "get",
    "url": "/signup",
    "title": "Create a new user",
    "name": "SignUp",
    "group": "/user",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender, either 'male' or 'female'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone</p>"
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
            "field": "accessToken",
            "description": "<p>Newly created access token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "renewToken",
            "description": "<p>Newly created renew token</p>"
          }
        ]
      }
    },
    "filename": "src/routers/user.js",
    "groupTitle": "/user"
  }
] });
