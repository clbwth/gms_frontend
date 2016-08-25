/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')
    .service('LogsUserIn', function ($http) {
        var LOCAL_TOKEN;
        var username = '';
        var isAuthenticated = false;
        var role = '';
        var authToken;

        function loadCredentials() {
                var token = window.sessionStorage.getItem('api_token');
                if (token) {
                        useCredentials(token);
                }
        }

        function storeUserCredentials(token) {
                window.sessionStorage.setItem('api_token', token);
                useCredentials(token);
        }

        function useCredentials(token){
                
        }

        //this.login = function (data)
        //{
        //    return $http.post(
        //        config.api_url + 'login',
        //        data
        //    );
        //}
        //
    })