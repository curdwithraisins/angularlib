/*
 * LibAppModule
 */

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
    }
]);