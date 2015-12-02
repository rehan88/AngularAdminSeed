
(function () {
  "use strict";

    angular
        .module('app.home')
        .config(['$routeProvider',

    function ($routeProvider) {
      $routeProvider
        .when("/", {
          controller: "homecontroller",
          templateUrl: "/app/Home/Home.html",
          controllerAs: 'vm'
        });
    }]);
})();