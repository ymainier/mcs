describe('mocha', function () {
	describe("slow code", function () {
		it("should highlight slow test (default >75ms)", function (done) {
			setTimeout(done, 76);
		});

		it("should allow us to tweak what is considered slow", function (done) {
			this.slow(30);
			setTimeout(done, 31);
		});
	});
});
