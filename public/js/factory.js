App.factory('factory', function($http) {
    var selectedReviewUsername = null;
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
    var Gym = {
        Name: null,
        Location: null,
        Email: null,
        Telephone: null,
        Openinghours: null,
        Price: null
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
        setGym: function(newGym) {
            Gym = newGym;
        },

        getGym: function() {
            return Gym;
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

        setSelectedReviewUsername: function(newSelectedReviewUsername) {
            selectedReviewUsername = newSelectedReviewUsername;
        },

        getSelectedReviewUsername: function() {
            return selectedReviewUsername;
        }

            reserve: function(gymName) {
            var body = {
                username: user.username,
                gymName: gymName,
            };

            return $http.post('http://localhost:3000/reserve', body);
        }
    }
});