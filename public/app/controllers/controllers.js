/*
 * Main controllers file
 */

angular.module("app.controllers", [])
    .controller("AdminAppCtrl", ["$scope", "$location", "GetUserData",
        function($scope, $location, GetUserData){
            $scope.isLogIn = false;
            $scope.currentUser = null;

            $scope.exitApp = function(){
                $scope.isLogIn = false;
                $scope.currentUser = null;
            };

            $scope.setCurrentUser = function(path){
                $scope.isLogIn = true;
                $scope.currentUser = GetUserData.get({path: path}, function(user){
                    $scope.mainImg = user.image;
                });
            };

            $scope.checkIfShow = function(){
                return false;
            };

            $scope.$on('styleChang', function(e, data){
                $scope.nightStyle = data;
            });

        }])
    .controller("headerCtrl", ["$scope", function($scope){
        $scope.$watch('nightStyle', function(newStyle){
            if (newStyle !== undefined)
                $scope.$emit('styleChang', newStyle);
        });
    }]).controller("asideBar", ["$scope", function($scope){

    }]);