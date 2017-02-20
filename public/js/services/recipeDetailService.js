app.factory('RecipeDetailService', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/api/listRecipeDetail');
        }
    }
}]);