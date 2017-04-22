angular.module('compareController', [])
    .controller('compareController', function($http) {
        this.compareGyms = function(data) {
            console.log("form submitted");
            console.log(this.data);

            $http.post('/http://localhost:3000/routes/compare', this.data);
        }
    });