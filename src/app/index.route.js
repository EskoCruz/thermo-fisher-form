(function() {
	'use strict';

	angular
		.module('thermoFisherForm')
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'vm',
				resolve: {
					initialData: ['usersApi', function (usersApi) {
						return usersApi.getUsers();
					}]
				}
			}).state('submit', {
				url: '/submit',
				templateUrl: 'app/submit/submit.html',
				controller: 'SubmitController',
				controllerAs: 'vm',
				resolve: {
					initialData: ['usersApi', function(usersApi) {
						return usersApi.createUser(users);
					}]
				}
			});

		$urlRouterProvider.otherwise('/');

	}

})();
