app.controller("logoutController", ['$scope', '$http', 'UserService', 'RecipeService', '$location', '$rootScope', '$localStorage', function ($scope, $http, UserService, RecipeService, $location, $rootScope, $localStorage) {



    var init = function () {

        $rootScope.isloggedIn=false;
        $localStorage.userId = null;
        $localStorage.isLoggedIn = false;
        $location.path('/');

    };
    init();



}]);