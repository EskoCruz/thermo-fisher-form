(function() {
	'use strict';

	describe('controllers', function(){

		beforeEach(module('thermoFisherForm'));

    //it('should define more than 5 awesome things', inject(function($controller) {
    //  var vm = $controller('MainController');
    //
    //  expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
    //  expect(vm.awesomeThings.length > 5).toBeTruthy();
    //}));
    //
		it('should define email and name', inject(function($controller) {
			var vm = $controller('MainController');

			expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
			//expect(vm.users).toBeTruthy();
			//expect(vm.users[0].email).toBeTruthy();
		}));

	});
})();
