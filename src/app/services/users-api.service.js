/**
 * Created by esko on 10/19/15.
 */
(function () {

	"use strict";

	angular
		.module('thermoFisherForm')
		.factory('usersApi', usersApi);

	usersApi.$inject = ['$http'];

	/* @ngInject */
	function usersApi($http) {
		var service = {
			getUsers: getUsers,
			addUser: addUser
		};

		var baseUrl = 'https://thermo-fisher.azure-mobile.net/tables';
		var requestConfig = {
			headers: {
				'X-ZUMO-APPLICATION': 'tMIJKjLmFPbpLrgwPzQPkaysfjHCtF42'
			}
		};

		return service;

		////////////////

		function getUsers() {
			return httpGet('/users');
		}

		function addUser(users) {
			return httpPost('/users', users);
		}

		function httpExecute(requestUrl, method, data) {
			return $http({
				url: baseUrl + requestUrl,
				method: method,
				data: data,
				headers: requestConfig.headers
			}).then(function success(response) {
				// this callback will be called asynchronously
				// when the response is available
				console.log('**response from EXECUTE', response);
				return response.data;
			}, function error(response) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log('**response from EXECUTE', response);
				return response.data;
			});
		}

		function httpGet(url) {
			return httpExecute(url, 'GET');
		}

		function httpPost(url, data) {
			return httpExecute(url, 'POST', data);
		}

	}


})();
