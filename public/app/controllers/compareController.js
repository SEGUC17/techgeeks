console.log("testing compare controller");
angular.module('compareController', [])
    .controller('compareController', function($scope, $http, gyms) {
        var self = this;
        console.log("11")
        this.compareGyms = () => {
            $http.post("http://localhost:3000/routes/compare", self.data)
                .then(function(response) {
                    $scope.content = response.data;
                    console.log(response.data);
                })
        }

    });