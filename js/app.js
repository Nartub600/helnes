'use strict';

var nestleApp = angular.module('nestleApp', [
    'nestleControllers',
    'nestleDirectives',
    'nestleSlider',
    'ngAnimate',
    'ngRoute'
]);

nestleApp.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html'
        })

        .when('/product', {
            templateUrl: 'partials/product.html'
        })

        // .when('/test', {
        //     templateUrl: 'partials/test.html'
        // })

        .otherwise('/home');
});
