app.controller("mainController", ['$scope', '$http', 'UserService', 'RecipeService', '$location','$rootScope','$localStorage', function ($scope, $http, UserService, RecipeService, $location, $rootScope,$localStorage) {

    $scope.formData = {};
    $scope.loading = true;
    $rootScope.myObject = { value: 'aa@cc.cc' };

    // GET ====================================================================

    UserService.get()
        .success(function (data) {
            $scope.users = data;
            $scope.loading = false;
        });

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createUser = function () {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if ($scope.formData.fullName != undefined && $scope.formData.email != undefined) {
            $scope.loading = true;

            // call the create function from our service (returns a promise object)
            UserService.create($scope.formData)

            // if successful creation, call our get function to get all the new users
                .success(function (data) {
                    $scope.loading = false;
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.users = data; // assign our new list of users
                    $localStorage.message = "Hello World";
                    $location.path('/recipe');
                });
        }
    };


    $scope.populateData = function () {

        // call the create function from our service (returns a promise object)
        RecipeService.populate()

        // if successful creation, call our get function to get all the new users
            .success(function (data) {
                $scope.loading = false;
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.users = data; // assign our new list of users
                $location.path('/recipe');
            });

    };

    $scope.login=function(){
        $localStorage.message = "Hello World";
        $location.path('/recipe');
    }


}]);