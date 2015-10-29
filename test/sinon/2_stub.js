var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('sinon', function () {
	describe('stub', function () {
		it('should be able to return constant value', function () {
			sinon.stub(Math, "random").returns(2);
			expect(Math.random()).to.equal(2);
			expect(Math.random()).to.equal(2);
			Math.random.restore();
		});

		it('should be able to return a computed value', function () {
			var object = {
				doSomethingSmart: function (a, b) {
					return a + b;
				}
			};

			sinon.stub(object, "doSomethingSmart", function (a, b) {
				return a * b;
			});

			expect(object.doSomethingSmart(2, 3)).to.equal(6);
		});
	});
});
