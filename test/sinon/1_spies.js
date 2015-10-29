var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('sinon', function () {
	describe('spies', function () {
		it('should spy on function call, arguments and return value', function () {
			function add(a, b) {
				return a + b;
			}
			var spiedAdd = sinon.spy(add);
			var result = spiedAdd(1, 2);

			expect(spiedAdd).to.have.been.calledWith(1, 2);
			expect(result).to.equal(3);
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
