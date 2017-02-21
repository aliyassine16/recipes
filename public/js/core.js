// var app = angular.module("recipeApp",[]);

var app = angular.module("recipeApp", ["ngRoute",'angularUtils.directives.dirPagination','ngStorage']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "recipes.html",
            controller: "recipeController"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "userController"
        })
        .when("/logout", {
            templateUrl: "logout.html",
            controller: "logoutController"
        })
        .when("/register", {
            templateUrl: "user.html",
            controller: "mainController"
        })
        .when("/recipe", {
            templateUrl: "recipes.html",
            controller: "recipeController"
        })
        .when("/recipe/:recipeId", {
            templateUrl: "recipeDetail.html",
            controller: "recipeDetailController"
        })
        .otherwise({
            redirectTo: '/'
        });
});