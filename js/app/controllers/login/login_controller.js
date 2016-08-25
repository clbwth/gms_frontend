/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')
    .controller('loginController', function ($scope, LogsUserIn, $state) {
        $scope.username;
        $scope.password;
        $scope.access_denied = false;

        /**
         * Document ready
         */
        angular.element(document).ready(function () {
            $scope.checkToken();

            $('#login').on('submit', function(e){
                e.preventDefault();
            });
        });

        /**
         * Tries auth with given credentials
         */
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
                    console.log(data);
                    $scope.access_denied = true;
                })
        };

        /**
         * Redirects to home
         */
        $scope.onSuccessLogin = function (){
            $state.go('welcome');
        };

        /**
         * Checks whether the token is stored.
         */
        $scope.checkToken = function () {
            if (!window.localStorage.getItem('api_token')) {
                $state.go('login');
            }
        }

    })
    
