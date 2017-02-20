app.controller("recipeDetailController", ['$scope', '$http', 'UserService', 'RecipeService','RecipeDetailService','$location', '$rootScope','$routeParams', function ($scope, $http, UserService, RecipeService,RecipeDetailService, $location, $rootScope,$routeParams) {

    $scope.loading = true;


    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    // GET =====================================================================

    var init = function () {


        RecipeDetailService.get($routeParams.recipeId)
            .success(function (data) {
                $scope.recipeDetails = data;
                $scope.loading = false;
                if ($rootScope.myObject) {
                    $scope.userEmail = $rootScope.myObject.value;
                }
                else{
                    //$location.path('/');

                    //save in local storage

                }
            });
    };

    init();


}]);