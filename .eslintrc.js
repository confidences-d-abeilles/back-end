const path = require('path');

module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        // FIXME: Did not found any decent solution to prevent eslint to warn about extraneous dependencies, even these are workspaces.
        "import/no-extraneous-dependencies": ["off"]
    },
};