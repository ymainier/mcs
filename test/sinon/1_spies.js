var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('sinon', function () {
	describe('spies', function () {
		it('should spy on function call', function () {
			function once(fn) {
				var returnValue, called = false;
				return function () {
					if (!called) {
						called = true;
						returnValue = fn.apply(this, arguments);
					}
					return returnValue;
				};
			}
			var callback = sinon.spy();
			var proxy = once(callback);

			proxy(1, 2, 3);

			expect(callback).to.have.been.calledWith(1, 2, 3);
		});

		it('should provide anonymous spy', function () {
			function run(callback) {
				return callback();
			}
			var spy = sinon.spy();
			run(spy);

			expect(spy).to.have.been.called;
		});
	});
});
