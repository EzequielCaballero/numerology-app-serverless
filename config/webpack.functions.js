'use strict';
const nodeExternals = require('webpack-node-externals'); //REF: https://github.com/netlify/netlify-lambda/issues/112#issuecomment-488644361
const CopyPlugin = require('copy-webpack-plugin'); //REF: https://community.netlify.com/t/hosting-a-file-along-with-my-function/1527/3

module.exports = {
	externals: [ nodeExternals() ],
	module: {
		rules: [
		  { 
			test: /\.pug$/,
			use: ['pug-loader']
		  },
		]
	},
	plugins: [
		new CopyPlugin({
		  patterns: [
			{ from: './templates/index.pug'},
			{ from: './templates/header.pug'},
			{ from: './templates/footer.pug'},
			{ from: './templates/content/contact.pug'},
			{ from: './templates/content/result.pug'}
		  ],
		}),
	],
};
