'use strict';

/**
 * @ngdoc service
 * @name DreamApp.login
 * @description
 * # login
 * Factory in the DreamApp.
 */
angular.module('DreamApp')
    .factory('Login', function ($resource, API) {
        return $resource(API.uri + '/oauth/register', {}, {
            register: {method: 'POST'}
        });
    });
