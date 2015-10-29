describe('mocha', function () {
	describe('asynchronous', function () {
		it("should be able to test asyncronous code", function (done) {
			var shouldThrowError = true;
			setTimeout(function () {
				shouldThrowError = false;
				done();
			}, 10);

			setTimeout(function () {
				if (shouldThrowError) {
					throw new Error('Error !');
				}
			}, 20);
		});
	});
});
