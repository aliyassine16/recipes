app.controller("recipeController", ['$scope', '$http', 'UserService', 'RecipeService', '$location', function ($scope, $http, UserService, RecipeService, $location) {

    $scope.loading = true;


    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    // GET =====================================================================

    RecipeService.get()
        .success(function (data) {
            $scope.recipes = data;
            $scope.loading = false;
        });

}]);