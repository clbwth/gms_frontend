/**
 * Created by Gabriele on 23/08/2016.
 */
angular.module('gms')

    .config(function($stateProvider, $urlRouterProvider, USER_ROLES)
    {
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index',{
                url: '/index',
                templateUrl: 'views/login.html'
            })
            .state('login',{
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })
            .state('welcome',{
                url: '/welcome',
                templateUrl: 'views/welcome.html'
            })
            //.state('admin',{
            //    url: '/admin',
            //    templateUrl: 'admin.html'
            //}, data: authorizedRoles [USER_ROLES.admin])
    })
