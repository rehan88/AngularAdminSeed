
(function () {
	"use strict";

	angular
		.module("app.home")
		.controller("homecontroller", homecontroller);
	
		homecontroller.$inject = [];

		function homecontroller() {
			var vm = this;

			vm.title = "Home";		  
			vm.introText = {};
		}
})();
