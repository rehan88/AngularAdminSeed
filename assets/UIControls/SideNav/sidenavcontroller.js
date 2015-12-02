
(function () {
	"use strict";

	angular
		.module("AngularTemplateApplication")
		.controller("sidenavcontroller", sidenavcontroller);

	sidenavcontroller.$inject = ["$location"];

	function sidenavcontroller($location) {
		var vm = this;
	}
})();
