/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')
    .controller('loginCtrl', function ($scope, LoginService) {
        $scope.username;
        $scope.password;

        $scope.login = function ()
        {            
            console.log(LoginService.login($scope.username, $scope.password));
            window.alert('AH OK');
        }
    })
    
