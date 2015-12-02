
(function () {
    "use strict";

    angular
        .module("app.contact")
        .config(["$routeProvider",

      function ($routeProvider) {
          $routeProvider
            .when("/contact", {
                controller: "contactcontroller",
                templateUrl: "/app/Contact/Contact.html",
                controllerAs: "vm"
            });
      }]);
})();