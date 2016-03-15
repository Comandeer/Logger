/* eslint no-console: 0 */

'use strict';

const Logger = {
	success( msg ) {
		console.log( '%c OK:' , 'color: green;font-weight: bold;', msg );
	},

	error( msg ) {
		console.error( '%c Error:', 'color: red;font-weight: bold;', msg );
	},

	warning( msg ) {
		console.warn( '%c Warning:', 'color: yellow;font-weight: bold;', msg );
	},

	info( msg ) {
		console.log( '%c Info:', 'color: blue;font-weight: bold;', msg );
	}
};

export default Logger;
