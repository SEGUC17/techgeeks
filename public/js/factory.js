App.factory('factory', function($http) {
    var selectedReviewUsername = null;
    // CREATING AN EMPTY USER
    var user = {
        username: null,
        Email: null,
        age: null,
        gender: null
    };
    // INITIALIZING GYMS TO COMPARE BETWEEN THEM
    var gymComparison = {
        gym1: null,
        gym2: null
    };
    // CREATING AN EMPTY GYM
    var Gym = {
        Name: null,
        Location: null,
        Email: null,
        Telephone: null,
        Openinghours: null,
        Price: null
    };
    //SETTING AND GETTING DATA ACCORDING TO WHAT WILL BE ENTERED
    return {
        setUsername: function(username) {
            user.username = username;
        },

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
        },
        reserve: function(gymName) {
            var body = {
                username: user.username,
                gymName: gymName,
            };

            return $http.post('http://localhost:3000/reserve', body);
        },
        review: function() {
            var body = {
                username: user.username,
            }
        }
    }
});