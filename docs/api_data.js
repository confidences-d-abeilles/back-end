define({ "api": [
  {
    "type": "post",
    "url": "/address",
    "title": "Creates an address",
    "name": "CreateAddress",
    "group": "Address",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender, either male or female</p>"
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
            "field": "line1",
            "description": "<p>First line of the address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "line2",
            "description": "<p>Second line of the address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Postal code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
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
            "field": "message",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "filename": "src/routers/address.js",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "/user/auth",
    "title": "Generate a new Jwt",
    "name": "Authenticate",
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
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/signup",
    "title": "Create a new user",
    "name": "SignUp",
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
            "field": "message",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "filename": "src/routers/user.js",
    "groupTitle": "User"
  }
] });
