const fs = require('fs');
const nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function (x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function (mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
	entry: './server/server.ts',
	target: 'node',
	externals: nodeModules,
	output: {
		filename: 'compiled.js', // output file
		path: __dirname + '/build',
	},
	resolve: {
		// Add in `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
	},
	resolveLoader: {},
	module: {
		loaders: [
			// All files with a '.ts' or '.tsx'
			// extension will be handled by 'ts-loader'
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	}
};