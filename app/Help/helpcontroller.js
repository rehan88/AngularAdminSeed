
(function () {
    "use strict";

    angular
        .module("app.help")
        .controller("helpcontroller", helpcontroller);

    helpcontroller.$inject = [];

    function helpcontroller() {
        var vm = this;

        vm.title = "Help";

    }
})();