angular.module('gyminfoController', [])
    .controller('gyminfoController', function($http) {
        this.gymInfo = function(data) {
            console.log("form submitted");
            console.log(this.data);

            $http.post('/http://localhost:3000/routes/gyminfo', this.data);
        }
    });
