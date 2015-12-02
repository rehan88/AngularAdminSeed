
(function () {

    angular
        .module('app.core')
        .factory('exampleservice', exampleservice);

    exampleservice.$inject = ['$http', 'logger'];

    function exampleservice($http, logger) {
        return {
            getPeople: getPeople
        };

        function getPeople() {
            return $http.get('/exampleURL/exampleURL')
                .then(getPeopleComplete)
                .catch(getPeopleFailed);

            function getPeopleComplete(response) {
                return response.data.results;
            }

            function getPeopleFailed(error) {
                logger.error('XHR Failed for getPeople.' + error.data);
            }
        }
    }
});