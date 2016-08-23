/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')

    .config(function($routeProvider)
    {
        $routeProvider
            .when('/welcome',
                {
                    templateUrl : 'views/welcome.html'
                })
            .otherwise({
                templateUrl : 'views/login.html'
            })
    })
