app.controller("recipeController", ['$scope', '$http', 'UserService', 'RecipeService', '$location', '$rootScope','$localStorage', function ($scope, $http, UserService, RecipeService, $location, $rootScope,$localStorage) {

    $scope.loading = true;


    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    // GET =====================================================================

    var init = function () {
        RecipeService.get()
            .success(function (response) {
                $scope.recipes = response.data;
                $scope.loading = false;
                $rootScope.userId=$localStorage.userId;
                $rootScope.isloggedIn=$localStorage.isLoggedIn;
            });
    };

    init();


}]);