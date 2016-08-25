/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')
    .config(function($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index',{
                url: '/index',
                templateUrl: 'views/welcome.html'
            })
            .state('login',{
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })
            .state('welcome',{
                url: '/welcome',
                templateUrl: 'views/welcome.html'
            })
    })
