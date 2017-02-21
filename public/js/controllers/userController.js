app.controller("userController", ['$scope', '$http', 'UserService', 'RecipeService', '$location', '$rootScope', '$localStorage', function ($scope, $http, UserService, RecipeService, $location, $rootScope, $localStorage) {

    $scope.formData = {};
    $scope.errorLogin = false;

    $scope.login = function () {
        if ($scope.formData.email != undefined) {
            UserService.login($scope.formData)
                .success(function (response) {

                    if (response.success == true) {
                        //console.log(data);
                        $scope.formData = {};
                        $localStorage.userId = response.data;
                        $localStorage.isLoggedIn = true;
                        $rootScope.isloggedIn=true;
                        $location.path('/');
                    }
                    else {
                        $rootScope.isloggedIn=true;
                        $localStorage.userId = null;
                        $localStorage.isLoggedIn = false;
                        $scope.errorLogin = true;
                    }
                });
        }
    };




}]);