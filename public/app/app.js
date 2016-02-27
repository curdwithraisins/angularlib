/*
 * LibAppModule
 */

angular.module("libApp", ["ngRoute", "ngAnimate", "app.controllers"]).
    run(["$rootScope", "$location",
    function($rootScope, $location) {
        console.log(1);


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