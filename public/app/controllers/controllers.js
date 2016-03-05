/*
 * Main controllers file
 */

angular.module("app.controllers", [])
    .controller("AdminAppCtrl", ["$scope", "$location", "$routeParams", "GetUserData",
        function($scope, $location, $routeParams, GetUserData){
            $scope.isLogIn = false;
            $scope.currentUser = null;
            $scope.showNav = true;

            $scope.exitApp = function(){
                $scope.isLogIn = false;
                $scope.currentUser = null;
            };

            $scope.setCurrentUser = function(path){
                $scope.isLogIn = true;
                console.log($routeParams);
                $scope.currentUser = GetUserData.get({path: path}, function(user){
                    $scope.mainImg = user.image;
                });
            };

            $scope.checkIfShow = function(){
                return $scope.showNav = !_.contains(["/404", "/500", "/login", "/front"], $location.path());
            };

            $scope.$on('styleChang', function(e, data){
                $scope.nightStyle = data;
            });

        }])
    .controller("headerCtrl", ["$scope", function($scope){
        return $scope.$watch('nightStyle', function(newStyle){
            if (newStyle !== undefined)
                $scope.$emit('styleChang', newStyle);
        });
    }])
    .controller("asideBar", ["$scope", function($scope){
        $scope.bookmark = [
            {
                name: "Alice in Wonderland",
                author: "Luis Carroll"
            },

            {
                name: "A Dance with Dragon",
                author: "George R.R. Martin"
            }];
    }])
    .controller("dashboardCtrl", ["$scope", "$rootScope", function($scope, $rootScope){

    }]);