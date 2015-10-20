(function() {
	'use strict';

	angular
		.module('thermoFisherForm')
		.controller('MainController', MainController);

	MainController.$inject = ['usersApi', 'initialData'];

	/** @ngInject */
	function MainController(usersApi, initialData) {
		var vm = this;

		vm.users = initialData;
		vm.createUser = createUser;
		vm.submitted = false;
		vm.warning = false;


    	activate();

		function activate() {
			vm.users.name = vm.users[0].name;
			vm.users.email = vm.users[0].email;
			vm.users.profileImage = vm.users[0].profileImage;

		}


		function createUser() {
			var newUser = {
				name: vm.users.name,
				email: vm.users.email,
				profileImage: vm.users.profileImage
			};
			usersApi.addUser(newUser).then(function(data) {
				//vm.users.name = '';
				//vm.users.email = '';
				vm.users.push(data);
				vm.submitted = true;

			});
		}



	}
})();
