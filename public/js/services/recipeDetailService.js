app.factory('RecipeDetailService', ['$http', function ($http) {
    return {
        get: function (id) {
            return $http.get('/api/listRecipeDetail/'+id);
        }
    }
}]);