/*
 * LibAppModule
 */

var app = angular.module("libApp", ["ngRoute", "ngAnimate", "app.controllers"]);

app.run(["$rootScope", "$location",
    function($rootScope, $location) {
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