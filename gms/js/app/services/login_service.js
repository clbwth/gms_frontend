/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')
    .service('LoginService', function ($http) {
        this.login = function (username, password)
        {
            return $http.post(config.api_url + 'login', [username, password]);
        }
    })