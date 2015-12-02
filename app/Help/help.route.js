
(function () {
  "use strict";

    angular
        .module('app.help')
        .config(['$routeProvider',

    function ($routeProvider) {
      $routeProvider
        .when("/help", {
          controller: "helpcontroller",
          templateUrl: "/app/Help/Help.html",
          controllerAs: 'vm'
        });
    }]);
})();