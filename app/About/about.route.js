
(function () {
    "use strict";

    angular
        .module('app.about')
        .config(['$routeProvider',

      function ($routeProvider) {
          $routeProvider
            .when("/about", {
                controller: "aboutcontroller",
                templateUrl: "/app/About/About.html",
                controllerAs: 'vm'
            });
      }]);
})();