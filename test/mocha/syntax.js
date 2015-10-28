var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var debug = require('debug')('syntax');

describe('Test Suite', function () {
	before(function () {
		debug('before: only once at the beginning of this test suite');
	});

	beforeEach(function () {
		debug('beforeEach: one time before each test case');
	});

	it('should be the first Test Case', function () {
		debug('Test Case 1');
	});
	it('should be the second Test Case', function () {
		debug('Test Case 2');
	});

	afterEach(function () {
		debug('beforeEach: one time after each test case');
	});

	after(function () {
		debug('after: only once at the end of this test suite');
	});
});
