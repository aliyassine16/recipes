app.controller("recipeController", ['$scope', '$http', 'UserService', 'RecipeService', '$location', '$rootScope', function ($scope, $http, UserService, RecipeService, $location, $rootScope) {

    $scope.loading = true;


    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    // GET =====================================================================

    var init = function () {
        RecipeService.get()
            .success(function (data) {
                $scope.recipes = data;
                $scope.loading = false;
                if ($rootScope.myObject) {
                    $scope.userEmail = $rootScope.myObject.value;
                }
                else{
                    $location.path('/');
                }
            });
    };

    init();


}]);