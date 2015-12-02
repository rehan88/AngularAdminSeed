
(function () {
    "use strict";

    angular
        .module("app.users")
        .config(["$routeProvider",

      function ($routeProvider) {
          $routeProvider
            .when("/users", {
                controller: "userscontroller",
                templateUrl: "/app/Users/Users.html",
                controllerAs: "vm"
            });
      }]);
})();