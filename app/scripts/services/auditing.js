'use strict';

/**
 * @ngdoc service
 * @name DreamApp.auditing
 * @description
 * # auditing
 * Service in the DreamApp.
 */
angular.module('DreamApp')
  .service('Auditing', function ($resource, API) {
        return $resource(API.uri + '/api/auditing', {}, {
            get: {method: 'GET'}
        });
  });
