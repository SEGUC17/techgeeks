App.factory('factory', function($http) {

    var user = {
        username: null,
        Email: null,
        age: null,
        gender: null
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
        getUsername: function() {
            return user.username;
        },

        setUser: function(newUser) {
            user = newUser;
        },

        getUser: function() {
            return user;
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