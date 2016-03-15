/* global chai:false, sinon:false, logger:false */
/* eslint no-console: 0 */

'use strict';

const expect = chai.expect;
const testMsg = 'test message';

describe( 'Logger', () => {
	it( 'is an object', () => {
		expect( logger ).to.be.an( 'object' );
	} );

	it( 'has success method', () => {
		expect( logger.success ).to.be.a( 'function' );
	} );

	it( 'has warning method', () => {
		expect( logger.warning ).to.be.a( 'function' );
	} );

	it( 'has error method', () => {
		expect( logger.error ).to.be.a( 'function' );
	} );

	it( 'has info method', () => {
		expect( logger.info ).to.be.a( 'function' );
	} );
} );

describe( 'Logger.success', () => {
	beforeEach( () => {
		sinon.spy( console, 'log' );
	} );

	afterEach( () => {
		console.log.restore();
	} );

	it( 'calls console.log', () => {
		logger.success( testMsg );

		expect( console.log ).to.have.been.calledOnce;
	} );

	it( 'prepends the message with the styled OK: phrase', () => {
		logger.success( testMsg );

		expect( console.log ).to.always.have.been.calledWith( '%c OK:', 'color: green;font-weight: bold;', testMsg );
	} );
} );

describe( 'Logger.warning', () => {
	beforeEach( () => {
		sinon.spy( console, 'warn' );
	} );

	afterEach( () => {
		console.warn.restore();
	} );

	it( 'calls console.log', () => {
		logger.warning( testMsg );

		expect( console.warn ).to.have.been.calledOnce;
	} );

	it( 'prepends the message with the styled Warning: phrase', () => {
		logger.warning( testMsg );

		expect( console.warn ).to.always.have.been.calledWith( '%c Warning:', 'color: yellow;font-weight: bold;', testMsg );
	} );
} );

describe( 'Logger.error', () => {
	beforeEach( () => {
		sinon.spy( console, 'error' );
	} );

	afterEach( () => {
		console.error.restore();
	} );

	it( 'calls console.log', () => {
		logger.error( testMsg );

		expect( console.error ).to.have.been.calledOnce;
	} );

	it( 'prepends the message with the styled Error: phrase', () => {
		logger.error( testMsg );

		expect( console.error ).to.always.have.been.calledWith( '%c Error:', 'color: red;font-weight: bold;', testMsg );
	} );
} );

describe( 'Logger.info', () => {
	beforeEach( () => {
		sinon.spy( console, 'log' );
	} );

	afterEach( () => {
		console.log.restore();
	} );

	it( 'calls console.log', () => {
		logger.info( testMsg );

		expect( console.log ).to.have.been.calledOnce;
	} );

	it( 'prepends the message with the styled Info: phrase', () => {
		logger.info( testMsg );

		expect( console.log ).to.always.have.been.calledWith( '%c Info:', 'color: blue;font-weight: bold;', testMsg );
	} );
} );
