/**
 * Created by richard on 8/24/16.
 */
'use strict'

angular.module('CmasR')
.controller('LoginController',function($scope,$location){
    $scope.login = function()
    {
        if ($scope.loginForm.$valid){
            console.log('sending request to server')
            var username = $scope.user.email;
            var password = $scope.user.password;
            //console.log(username+" "+password)

            /*********************************************
             * Whole of this side is just a test run
             */
            if(username=="admin@admin.com" && password=="a")
            {
                $location.path('/dashboard');
            }
        }
    }
})