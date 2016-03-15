(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.logger = factory());
}(this, function () { 'use strict';

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

	return Logger;

}));