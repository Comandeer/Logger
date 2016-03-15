import nodeResolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';

export default {
	entry: 'index.js',
	format: 'umd',
	moduleName: 'logger',
	plugins: [ nodeResolve(), convertCJS() ],
	dest: 'bundle.js'
};
