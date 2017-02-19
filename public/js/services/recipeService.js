app.factory('RecipeService', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/api/listRecipes');
        },
        populate: function () {
            return $http.get('/api/populateData');
        }
    }
}]);