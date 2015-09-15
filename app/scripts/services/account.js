'use strict';

/**
 * @ngdoc service
 * @name DreamApp.Account
 * @description
 * # Account
 * Service in the DreamApp.
 */
angular.module('DreamApp')
  .service('Account', function ($resource, API) {
        return $resource(API.uri + '/api/me/account', {}, {
            get: {method: 'GET'}
        });
  });
