// var app = angular.module("recipeApp",[]);

var app = angular.module("recipeApp", ["ngRoute",'angularUtils.directives.dirPagination','ngStorage']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "user.html",
            controller: "mainController"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "userController"
        })
        .when("/logout", {
            templateUrl: "logout.html",
            controller: "userController"
        })
        .when("/register", {
            templateUrl: "register.html",
            controller: "userController"
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