app.factory('UserService', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/api/listUsers');
        },
        create: function (data) {
            return $http.post('/api/createUser', data);
        }
    }
}]);