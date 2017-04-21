angular.module('reserveController', [])
.controller('reserveController', function($http){
  this.clientReservation = function(reserveData){
       console.log("form submitted");
        console.log(this.reserveData);

        $http.post('makereservation/reserve', this.reserveData);
   }
});




//http://localhost:3000/api/users
//router.post('/reserve', (function(req, res) {