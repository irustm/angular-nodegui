require('zone.js/dist/zone-node');
require('reflect-metadata');

window = {};

require('./runtime-es5');
require('./polyfills-es5');
require('./vendor-es5');
require('./main-es5');
