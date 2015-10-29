var Backbone = require('backbone');
var chai = require('chai');
var expect = chai.expect;

chai.use(function (chai) {
	chai.Assertion.addMethod('chuckNorris', function () {
		this.assert(
			this._obj === "Chuck Norris",
			"expect #{this} to be ChuckNorris",
			"expect #{this} not to be ChuckNorris"
		);
	});
});

describe('chai', function () {
	describe('custom matchers', function () {
		it('should detect Chuck Norris', function () {
			expect("Chuck Norris").to.be.chuckNorris();
			expect("Yann").not.to.be.chuckNorris();
		});
	});
});
