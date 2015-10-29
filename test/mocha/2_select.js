describe('mocha', function () {
	describe('only', function () {
		// it.only('should only execute this test, but >1 only is hazardous', function () {});
	});

	describe('skip', function () {
		it('should be executed', function () {});
		it.skip('should be skipped', function () {});
	});
});
