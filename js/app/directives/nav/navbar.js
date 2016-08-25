angular.module('gms')

.directive('navbar', function () {
    return {
        templateUrl: 'views/partials/nav/navbar.html',
        restrict: 'E',
        controller: 'navController'
    }
});
