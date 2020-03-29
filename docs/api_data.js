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
    "url": "/beehive",
    "title": "Creates a beehive",
    "name": "CreateBeehive",
    "group": "Beehive",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the beehive</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Technical identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "occupation",
            "description": "<p>Current occupation in percent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memo",
            "description": "<p>A quick note space</p>"
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
    "filename": "src/routers/beehive.js",
    "groupTitle": "Beehive"
  },
  {
    "type": "post",
    "url": "/news",
    "title": "Creates a news",
    "name": "CreateNews",
    "group": "News",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the article</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the article</p>"
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
    "filename": "src/routers/news.js",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "/user/auth",
    "title": "Generate a new Jwt`",
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
    "type": "get",
    "url": "/user/all",
    "title": "Get all users",
    "name": "GetAll",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>A complete list of all users</p>"
          }
        ]
      }
    },
    "filename": "src/routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/renew",
    "title": "Renew a Jwt with an expired accessToken and a refreshToken`",
    "name": "Refresh",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>An expired access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>An valid refresh token</p>"
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
    "type": "get",
    "url": "/user",
    "title": "Renew a Jwt with an expired accessToken and a refreshToken`",
    "name": "Refresh",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>My personal user object</p>"
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
