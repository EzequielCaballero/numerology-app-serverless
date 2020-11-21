'use strict';
const nodeExternals = require('webpack-node-externals'); //REF: https://github.com/netlify/netlify-lambda/issues/112#issuecomment-488644361

module.exports = {
	externals: [ nodeExternals() ]
};
