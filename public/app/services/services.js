/*
* Main services file
* */

angular.module("app.services", ["ngResource"])
    .service('Session', function() {
        this.create = function (userId) {
            this.userId = userId;
        };

        this.destroy = function () {
            this.userId = null;
        };
    })
    .factory("LogInApp", ["$http", "$resource", "$q", "Session",
        function($http, $resource, $q, Session){
        var LogIn = {};

        LogIn.login = function(credentials) {
            /*return ($http({
                method: 'POST',
                url: "",
                params: credentials
            }).then(function (res) {
                    Session.create(res.data);
                    return res;
                }));*/
            return 1;//$resource('../data/users/users.js');
        };

        LogIn.cookie = function(cookie) {
            /*return ($http.post('/cookie/')
             .then(function(res){
             Session.create(res.data);
             return res.data;
             }));*/

            /*var cookie = $resource('data/users/:path.json', {path: '@users'}, {
                getData: {
                    isArray: true,
                    method: 'GET',
                }
            });*/

            /*var data = cookie.query(function(){
                console.log(data);
            });
            return data.$promise;*/

            /*cookie.users = 'users';
            var data = cookie.getData({path: cookie.users});
            return data.$promise;*/

            return $q(function(resolve, reject) {
                var user = $resource('data/users/users.json', {});
                user.query(function(data){
                    Session.create(data[0].id);
                    resolve(data[0].path);
                });
            });
        };

        return LogIn;
    }])
    .factory("GetUserData", ["$resource", function($resource){
        return $resource('data/users-data/:path.json', {});
    }]);