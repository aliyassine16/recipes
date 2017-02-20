app.controller("recipeDetailController", ['$scope', '$http', 'UserService', 'RecipeService','RecipeDetailService','$location', '$rootScope', function ($scope, $http, UserService, RecipeService,RecipeDetailService, $location, $rootScope) {

    $scope.loading = true;


    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    // GET =====================================================================

    var init = function () {



        // add the recipe detail request here
    };

    init();


}]);