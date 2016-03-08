/*
 * LibAppModule
 */
"use strict";
angular.module("libApp", ["ngRoute", "ngAnimate", "app.controllers", "app.services"])
    .run(["$rootScope", "$location", "LogInApp", function($rootScope, $location, LogInApp) {
        /*LogInApp.cookie().$promise.then(function(data) {
            console.log(data);
        });*/

        LogInApp.cookie().then(function(path) {
            if (path) {
                $rootScope.$$childHead.setCurrentUser(path);
            }
        });

        /*$(document).ready(function () {
         $("body").queryLoader2({
         backgroundColor: "#fff",
         barColor: "#000",
         barHeight: 10,
         percentage: true,
         completeAnimation: "grow"
         });

         });*/
    }])
    .config(["$routeProvider", function($routeProvider){
        return $routeProvider
            .when("/", {
                redirectTo: "/dashboard"
            })
            .when("/dashboard", {
                templateUrl: "app/views/dashboard/dashboard.html",
                controller: "dashboardCtrl"
            })
            .when("/recomendations", {
                templateUrl: "app/views/pages/recomendations.html"
            })
            .when("/feautures", {
                templateUrl: "app/views/pages/feautures.html"
            })
            .when("/collections", {
                templateUrl: "app/views/pages/collections.html"
            })
            .when("/404", {
                templateUrl: "app/views/pages/404.html"
            })
            .when("/500", {
                templateUrl: "app/views/pages/500.html"
            })
            .otherwise({
                redirectTo: "/404"
            });
    }]);