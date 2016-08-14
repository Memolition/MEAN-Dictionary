var dictionary = angular.module('dictionary', ['ngRoute'])
    .config(function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.otherwise({
            redirectTo: "home",
            controller: "main_controller"
        })
    });