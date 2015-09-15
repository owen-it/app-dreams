'use strict';

/**
 * @ngdoc service
 * @name DreamApp.loginModal
 * @description
 * # loginModal
 * Service in the DreamApp.
 */
angular.module('DreamApp')
    .service('LoginModal', function ($rootScope, $modal) {
        function assignCurrentUser(user) {
            $rootScope.currentUser = user;
            return user;
        }

        return function () {
            var instance = $modal.open({
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'LoginCtrl'
            });

            return instance.result.then(assignCurrentUser);
        };
    });
