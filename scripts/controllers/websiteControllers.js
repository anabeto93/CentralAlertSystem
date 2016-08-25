/**
 * Created by richard on 8/25/16.
 */
'use strict';

angular.module('CmasR')
.controller('AirtelMoneyMarketCtrl',['$scope','$http',function($scope,$http){
    console.log('AirtelMoneyMarket sending request to php');
    //var username = $scope.user.email;
    //var password = $scope.user.password;
    var website = "http://www.airtelmoneymarket.com";
    //console.log(website);

    /*********************************************
     * Whole of this side is just a test run
     */
    /*if(username=="admin@admin.com" && password=="a")
     {
     $location.path('/dashboard');
     }*/
    $scope.url = 'scripts/PHP/monitorSite.php';
    //console.log($scope.url);
    //dataSent = {'urlsite': website};

    $http.post($scope.url, {"urlsite": website})
        .success(function(data, status,headers,config) {
            console.log("Data retrieved is "+data);
            $scope.status = status;
            $scope.data = data;
            $scope.result = data;
        })
        .error(function(data,status,headers,config){
            console.log('error');
        })
    }
])
.controller('ApiRancardMobilityCtrl',['$scope','$http',function($scope,$http) {
    console.log('ApiRancardMobility sending request to php');
    //var username = $scope.user.email;
    //var password = $scope.user.password;
    var website = "http://API.RANCARDMOBILITY.COM";
    //console.log(website);

    /*********************************************
     * Whole of this side is just a test run
     */
    /*if(username=="admin@admin.com" && password=="a")
     {
     $location.path('/dashboard');
     }*/
    $scope.url = 'scripts/PHP/monitorSite.php';
    console.log($scope.url);
    //dataSent = {'urlsite': website};

    $http.post($scope.url, {"urlsite": website})
        .success(function(data, status,headers,config) {
            console.log("Data retrieved is "+data);
            $scope.status = status;
            $scope.data = data;
            $scope.result = data;
        })
        .error(function(data,status,headers,config){
            console.log('error');
        })
}])
.controller('ShopWithRendezvousCtrl',['$scope','$http',function($scope,$http){
            console.log('SWR sending request to php');
            //var username = $scope.user.email;
            //var password = $scope.user.password;
            var website = "http://SHOPWITHRENDEZVOUS.COM";
            //console.log(website);

            /*********************************************
             * Whole of this side is just a test run
             */
            /*if(username=="admin@admin.com" && password=="a")
             {
             $location.path('/dashboard');
             }*/
            $scope.url = 'scripts/PHP/monitorSite.php';
            //console.log($scope.url);
            //dataSent = {'urlsite': website};

            $http.post($scope.url, {"urlsite": website})
                .success(function(data, status,headers,config) {
                    console.log("Data retrieved is "+data);
                    $scope.status = status;
                    $scope.data = data;
                    $scope.result = data;
                })
                .error(function(data,status,headers,config){
                    console.log('error');
                })
}]).controller('MyRancardMobilityCtrl',['$scope','$http',function($scope,$http){
        console.log('MyRancardMobility sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://MY.RANCARDMOBILITY.COM";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('RendezvousCtrl',['$scope','$http',function($scope,$http){
        console.log('Rendezvous sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://rendezvous.com";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
        console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('VodafoneLiveCtrl',['$scope','$http',function($scope,$http){
        console.log('VodafoneLive sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://vodafonelive.com";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('BooksNgAirtelLiveCtrl',['$scope','$http',function($scope,$http){
        console.log('BooksNgAirtel sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://BOOKS.NG.AIRTELLIVE.COM";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('TicketsNgAirtelLiveCtrl',['$scope','$http',function($scope,$http){
        console.log('TicketsNgAirtel sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://tickets.ng.airtellive.com";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('MyRancardCtrl',['$scope','$http',function($scope,$http){
        console.log('MyRancard sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://my.rancard.com";
        console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
       // console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('ContentClassificationBBCCtrl',['$scope','$http',function($scope,$http){
        console.log('ContentClassification sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://localhost";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('MMarathonRancardMobilityCtrl',['$scope','$http',function($scope,$http){
        console.log('MMarathonRancardMobility sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://mmarathon.rancardmobility.com";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('MMarathonAdminCtrl',['$scope','$http',function($scope,$http){
        console.log('RancardMobilityAdmin sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://mmarathon-admin.rancardmobility.com";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
       // console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('GraphDBCtrl',['$scope','$http',function($scope,$http){
        console.log('GraphDB sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = " http://192.168.1.234:7474";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
       // console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }])
    .controller('MyJoyOnlineCtrl',['$scope','$http',function($scope,$http){
        console.log('MyJoyOnline sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://myjoyonline.com";
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        $scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
        //dataSent = {'urlsite': website};

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })
    }]);