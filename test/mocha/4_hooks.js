var debug = require('debug')('hooks');

describe('mocha', function () {
	describe('hooks, launch with npm run grep-hooks', function () {
		before(function () {
			debug('before');
		});

		beforeEach(function () {
			debug('beforeEach');
		});

		it('should be the first Test Case', function () {
			debug('Test Case 1');
		});
		it('should be the second Test Case', function () {
			debug('Test Case 2');
		});

		afterEach(function () {
			debug('afterEach');
		});

		after(function () {
			debug('after');
		});
	});
});
