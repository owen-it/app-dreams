'use strict';

/**
 * @ngdoc service
 * @name DreamApp.member
 * @description
 * # members
 * Service in the DreamApp.
 */
angular.module('DreamApp')
  .service('Member', function ($resource, API) {
        return $resource(API.uri + '/api/members', {}, {
            get: {
                method: 'GET'
            }
        });
  });
