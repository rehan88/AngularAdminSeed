
(function () {
    "use strict";

    angular
        .module("app.users")
        .controller("userscontroller", userscontroller);

    userscontroller.$inject = ["uiGridConstants", "$mdDialog", "$mdBottomSheet", "toaster"];

    function userscontroller(uiGridConstants, $mdDialog, $mdBottomSheet, toaster) {

        var vm = this;
        vm.title = "Users";
        vm.introText = {};

        loadData();

        vm.gridOptions = {
            showGridFooter: true,
            showColumnFooter: true,
            enableFiltering: true,
            columnDefs: [
            { field: 'firstName', enableCellEdit: true },
            { field: 'lastName'},
            { field: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, aggregationHideLabel: false },
            { field: 'company'},
            { field: 'employed'},
            ],
            data: vm.myData
        }

        vm.showListBottomSheet = function ($event) {
            vm.alert = '';
            $mdBottomSheet.show({
                templateUrl: '/app/Users/Create/Add-User.html',
                controller: 'userscontroller as vm',
                targetEvent: $event
            }).then(function (clickedItem) {
                vm.alert = clickedItem.name + ' clicked!';
            });
        };

        vm.submit = function() {
            $mdBottomSheet.hide();
            toaster.pop('success', "User added", "Thankyou, your user has been added");       
        };

        //This is dummy data for the UI Grid example. This array should be populated by using a service.
        function loadData() {

           vm.myData = [];

           vm.myData = [{
              "firstName": "Cox",
              "lastName": "Carney",
              "age": "20",
              "company": "Enormo",
              "employed": true
          },
          {
              "firstName": "Lorraine",
              "lastName": "Wise",
              "age": "27",
              "company": "Comveyer",
              "employed": false
          },
          {
              "firstName": "Nancy",
              "lastName": "Waters",
              "age": "40",
              "company": "Fuelton",
              "employed": false
          },
          {
              "firstName": "Lorraine",
              "lastName": "Wise",
              "age": "35",
              "company": "Comveyer",
              "employed": false
          },
          {
              "firstName": "Nancy",
              "lastName": "Waters",
              "age": "21",
              "company": "Fuelton",
              "employed": true
          },
          {
              "firstName": "Lorraine",
              "lastName": "Wise",
              "age": "52",
              "company": "Comveyer",
              "employed": false
          },
          {
              "firstName": "Nancy",
              "lastName": "Waters",
              "age": "18",
              "company": "Fuelton",
              "employed": true
          },
          {
              "firstName": "Lorraine",
              "lastName": "Wise",
              "age": "40",
              "company": "Comveyer",
              "employed": true
          },
          {
              "firstName": "Nancy",
              "lastName": "Waters",
              "age": "33",
              "company": "Fuelton",
              "employed": true
          },
          {
              "firstName": "Lorraine",
              "lastName": "Wise",
              "age": "29",
              "company": "Comveyer",
              "employed": false
          },
          {
              "firstName": "Nancy",
              "lastName": "Waters",
              "age": "19",
              "company": "Fuelton",
              "employed": true
          },
          {
              "firstName": "Lorraine",
              "lastName": "Wise",
              "age": "31",
              "company": "Comveyer",
              "employed": false
          },
          {
              "firstName": "Nancy",
              "lastName": "Waters",
              "age": "40",
              "company": "Fuelton",
              "employed": true
          }];

                return vm.myData

        }     
    }
})();