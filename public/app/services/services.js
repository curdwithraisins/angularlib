/*
* Main services file
* */

angular.module("app.services", ['ngResource'])
    .service('Session', function() {
        this.create = function (userId) {
            this.userId = userId;
        };

        this.destroy = function () {
            this.userId = null;
        };
    }).factory("LogInApp", ["$http", "$resource", "Session", function($http, $resource, Session){
        var login = function(credentials) {
            /*return ($http({
                method: 'POST',
                url: "",
                params: credentials
            }).then(function (res) {
                    return res;
                }));*/
            return $resource('../data/users/users.js');
        };


    }]);