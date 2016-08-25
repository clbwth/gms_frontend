/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')
    .controller('loginCtrl', function ($scope, LogsUserIn, $state) {
        $scope.username;
        $scope.password;

        $scope.login = function ()
        {
           // console.log($state);

            LogsUserIn.login({
                    username: $scope.username,
                    password: $scope.password
                })
                .success(function (data) {
                    window.sessionStorage.setItem('api_token', data);
                    $scope.onSuccessLogin();
                })
                .error(function (data) {
                    //console.log(data);
                })
        };
        $scope.onSuccessLogin = function (){
            $state.go('welcome');
        };

        $scope.checkToken = function () {
            if (!window.sessionStorage.getItem('api_token')) {
                $stae.go('login');
            }
        }
    })
    
