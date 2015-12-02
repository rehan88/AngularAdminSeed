
(function () {
    "use strict";

    angular
        .module("app.about")
        .controller("aboutcontroller", aboutcontroller);

    aboutcontroller.$inject = [];

    function aboutcontroller() {
        var vm = this;

        vm.title = "About";
        vm.introText = "Material design is a comprehensive guide for visual, motion, and interaction design across platforms and devices.";
    };

})();