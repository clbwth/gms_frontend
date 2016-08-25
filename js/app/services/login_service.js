/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')
    .service('LogsUserIn', function ($http) {
        this.login = function (data)
        {
            return $http.post(
                config.api_url + 'login',
                data
            );
        }
        
    })