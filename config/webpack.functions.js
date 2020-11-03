'use strict';
const nodeExternals = require('webpack-node-externals'); //REF: https://github.com/netlify/netlify-lambda/issues/112#issuecomment-488644361
const CopyPlugin = require('copy-webpack-plugin'); //REF: https://community.netlify.com/t/hosting-a-file-along-with-my-function/1527/3

module.exports = {
	externals: [ nodeExternals() ],
	plugins: [
		new CopyPlugin({
		  patterns: [
			{ from: './static/templates', to: './templates'}
		  ],
		}),
	],
};
