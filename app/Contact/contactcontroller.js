
(function () {
    "use strict";

    angular
        .module("app.contact")
        .controller("contactcontroller", contactcontroller);

    contactcontroller.$inject = ["$mdDialog", "toaster"];

    function contactcontroller($mdDialog, toaster) {
        var vm = this;

        vm.title = "Contact Us";
        vm.namePlaceholder = "Name";
        vm.emailPlaceholder = "Email";
        vm.commentPlaceholder = "How can we help?";

        vm.showConfirm = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
              .title('Confirmation')
              .content('Are you sure you want to send this form ? ')
              .ariaLabel('Lucky day')
              .ok('Confirm')
              .cancel('Cancel')
              .targetEvent(ev);
            $mdDialog.show(confirm).then(function () {
                toaster.pop('success', "Query", "Thankyou for submitting your query");

            }, function () {
            });

        };

    }
})();