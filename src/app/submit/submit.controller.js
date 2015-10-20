/**
 * Created by esko on 10/19/15.
 */

(function () {

	"use strict";

	angular
		.module('thermoFisherForm')
		.controller('SubmitController', SubmitController);

	SubmitController.$inject = ['initialData'];

	/* @ngInject */
	function SubmitController(initialData) {
		/* jshint validthis: true */
		var vm = this;

		vm.activate = activate;
		//vm.title = 'SubmitController';
		vm.data = initialData;

		activate();

		////////////////

		function activate() {

		}


	}

})();
