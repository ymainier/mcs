var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('sinon', function () {
	describe('fake timers', function () {
		it('should speed up time', function (done) {
			var longDuration = 1000;
			var clock = sinon.useFakeTimers();
			this.slow(10);
			
			setTimeout(function () {
				clock.restore();
				done();
			}, longDuration);

			clock.tick(longDuration);
		});
	});
});

