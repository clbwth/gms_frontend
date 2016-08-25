/**
 * Created by Gabriele on 25/08/2016.
 */
angular.module('gms')
    .constant('AUTH_EVENTS', {
        notAuthenticated: 'not-authenticated',
        notAuthorized: 'not-authorized'
    })
    .constant('USER_ROLES', {
        admin: 'admin_role',
        public: 'public_role'
    })