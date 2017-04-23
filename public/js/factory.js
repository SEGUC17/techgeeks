App.factory('factory', function($http) {

    var user = {
        username: null
    };

    var gymComparison = {
        gym1: null,
        gym2: null
    };
    var GymName = {
        gymname: null,
        gymprice: null,
        gymlocation: null
    }

    return {
        setUsername: function(username) {
            user.username = username;
        },

        isLoggedIn: function() {
            return user.username;
        },

        setGymComparison: function(gym1, gym2) {
            gymComparison.gym1 = gym1;
            gymComparison.gym2 = gym2;
        },

        getGymComparison: function() {
            return gymComparison;
        },

        reserve: function(gymName) {
            var body = {
                username: user.username,
                gymName: gymName,
            };

            return $http.post('http://localhost:3000/reserve', body);
        }
    }
});
// setGymName: function(gymname, gymprice, gymlocation){
//     gymSearch.gymname = gymname,
//     gymSearch.gymprice = gymprice,
//     gymSearch.gymlocation = gymlocation,

// }     
// getGymName: function(){
//     return gymSearch;
// }