
(function () {
	"use strict";

	angular
		.module("AngularTemplateApplication")
		.controller("toptoolbarcontroller", toptoolbarcontroller);

	toptoolbarcontroller.$inject = ["$mdSidenav"];

	function toptoolbarcontroller($mdSidenav) {
		var vm = this;
			
		vm.searchIcon = true;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.searchshowclick = function () {
		    vm.searchInput = true;
			vm.searchIcon = false;
		};

		vm.searchhideclick = function () {
		    vm.searchInput = false;
		    vm.searchIcon = true;
		};


	}
})();
