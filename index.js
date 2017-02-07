'use strict';
const path = require('path');
const libs = require('require-all')(path.join(__dirname, 'libs'));

// Returns a single object with all lib export methods bounded
module.exports = Object.getOwnPropertyNames(libs)
						.map(lib => libs[lib])
						.reduce((a, b) => Object.assign(a, b));

