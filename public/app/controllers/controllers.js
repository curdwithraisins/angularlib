/*
 * Main controllers file
 */

angular.module("app.controllers", []).
    controller("AdminAppCtrl", ["$scope", "$location",
        function($scope, $location){

            $scope.checkIfShow = function(){
                return false;
            };

        }]);