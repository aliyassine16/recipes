// var app = angular.module("recipeApp",[]);

var app = angular.module("recipeApp", ["ngRoute",'angularUtils.directives.dirPagination']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "user.html",
            controller: "mainController"
        })
        .when("/recipe", {
            templateUrl: "recipes.html",
            controller: "recipeController"
        })
        .otherwise({
            redirectTo: '/'
        });
});