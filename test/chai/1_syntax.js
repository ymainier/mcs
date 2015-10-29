var expect = require('chai').expect;
var assert = require('chai').assert;
require('chai').should();

describe('chai', function () {
	var string, array, object;

	beforeEach(function () {
		string = 'something';
		array = [1, 2, 3];
		object = {elements: ['a', 'b']};
	});

	describe('syntax', function () {
		it('should provide an expect syntax', function () {
			expect(string).to.be.a('string');
			expect(string).to.equal('something');
			expect(array).to.have.length(3);
			expect(object).to.have.property('elements').with.length(2);
		});

		it('should provide an assert syntax', function () {
			assert.typeOf(string, 'string');
			assert.equal(string, 'something');
			assert.lengthOf(array, 3);
			assert.lengthOf(object.elements, 2);
		});

		it('should provide a should syntax', function () {
			string.should.be.a('string');
			string.should.equal('something');
			array.should.have.length(3);
			object.should.have.property('elements').with.length(2);
		});
	});
});
