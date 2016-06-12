'use strict';

var nestleApp = angular.module('nestleApp', [
    'nestleControllers',
    'nestleDirectives',
    'ngAnimate',
    'ngRoute',
    'ngTouch'
]);

nestleApp.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html'
        })

        // .when('/product', {
        //     templateUrl: 'partials/product.html'
        // })

        .when('/product/:product', {
            templateUrl: 'partials/product.html'
        })

        .when('/mobile', {
            templateUrl: 'partials/mobile.html'
        })

        .when('/mobileint', {
            templateUrl: 'partials/mobileint.html'
        })

        .otherwise('/home');
});
