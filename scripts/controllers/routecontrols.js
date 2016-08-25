'use strict';

angular.module('CmasR')
.controller('SiteMonitorController',['$scope','$http',function($scope,$http){
    /*$scope.url = 'scripts/PHP/monitorSite.php';
    console.log($scope.url)
    $scope.monitorSite = function(isValid)
    {

    }*/
    $scope.monitorSite = function() {
        if ($scope.urlMonitorForm.$valid) {
            console.log('sending request to php')
            //var username = $scope.user.email;
            //var password = $scope.user.password;
            var website = $scope.webUrl;
            console.log(website)

            /*********************************************
             * Whole of this side is just a test run
             */
            /*if(username=="admin@admin.com" && password=="a")
             {
             $location.path('/dashboard');
             }*/
            $scope.url = 'scripts/PHP/monitorSite.php';
            console.log($scope.url)

            $http.post($scope.url, {"urlsite": $scope.urlsite}).
            success(function(data, status) {
                console.log(data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
        }
    }
}]
)
.controller('DashboardController',function(){

})