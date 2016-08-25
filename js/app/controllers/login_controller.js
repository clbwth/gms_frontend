/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')
    .controller('loginCtrl', function ($scope, LogsUserIn, $state) {
        $scope.username;
        $scope.password;
        $scope.access_denied = false;

        $scope.login = function ()
        {
            LogsUserIn.login({
                    username: $scope.username,
                    password: $scope.password
                })
                .success(function (data) {
                    $scope.access_denied = false;
                    window.localStorage.setItem('api_token', data);
                    $scope.onSuccessLogin();
                })
                .error(function (data) {
                    $scope.access_denied = true;
                })
        };

        $scope.onSuccessLogin = function (){
            $state.go('welcome');
        };

        $scope.checkToken = function () {
            if (!window.localStorage.getItem('api_token')) {
                $state.go('login');
            }
        }

        angular.element(document).ready(function () {
            $scope.checkToken();
        });
    })
    
