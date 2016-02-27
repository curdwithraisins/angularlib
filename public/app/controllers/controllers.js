/*
 * Main controllers file
 */

angular.module("app.controllers", []).
    controller("AdminAppCtrl", ["$scope", "$location",
        function($scope, $location){
            $scope.isLogIn = false;
            $scope.currentUser = null;

            $scope.exitApp = function(){
                $scope.isLogIn = false;
                $scope.currentUser = null;
            };

            $scope.setCurrentUser = function(user){
                $scope.isLogIn = true;
                $scope.currentUser = user;
            };

            $scope.checkIfShow = function(){
                return false;
            };

            $scope.$on('styleChang', function(e, data){
                $scope.nightStyle = data;
            });

        }])
    .controller("headerCtrl", ["$scope", "$rootScope", function($scope, $rootScope){
        $scope.$watch('nightStyle', function(newStyle){
            if (newStyle !== undefined)
                $scope.$emit('styleChang', newStyle);
        });
    }]
);