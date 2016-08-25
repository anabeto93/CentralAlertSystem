'use strict';

angular.module('CmasR',['ngRoute','ngAnimate'])
.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider.when('/dashboard',{
         templateUrl:'views/dashboard.html',
         controller: 'DashboardController'
    })
        .when('/about',{
            templateUrl:'views/about.html'

        })
        .when('/contact',{
            templateUrl:'views/contact.html'
        })
        .when('/',{
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            controllerAs: 'loginControl'
        })
        .otherwise({
            redirectTo: '/'
        })
    $locationProvider.html5Mode(true);

}])