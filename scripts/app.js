'use strict';

angular.module('CmasR',['ngRoute','ngAnimate','ui.router'])
.config([
    '$routeProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    function ($routeProvider,$locationProvider,$urlRouterProvider,$stateProvider) {
    $routeProvider.when('/dashboard',{
         templateUrl:'views/dashboard2.html',
         controller: 'DashboardController'
    })
        .when('/about',{
            templateUrl:'views/about.html'

        })
        .when('/contact',{
            templateUrl:'views/contact.html'
        })
        .when('/webmonitors',{
            templateUrl: 'views/dashboard2.html'
        })
        .when('/',{
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            controllerAs: 'loginControl'
        })
        .otherwise({
            redirectTo: '/'
        });
        /*$urlRouterProvider
            .when("/about","views/about.html")
            .otherwise('/');*/
        $stateProvider
            .state('about',
                {
                  url: '/about',
                    templateUrl: 'views/about.html'
                })
            .state('dashboard',
                {
                    url: '/dashboard',
                    templateUrl: 'views/monitorSite.html'
                })
            .state('webmonitors',
                {
                    url: '/webmonitors',
                    templateUrl: 'views/websites3.html'
                });
    $locationProvider.html5Mode(true);

}])