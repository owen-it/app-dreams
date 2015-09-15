'use strict';

/**
 * @ngdoc service
 * @name DreamApp.dream
 * @description
 * # dream
 * Factory in the DreamApp.
 */
angular.module('DreamApp')
    .factory('Dream', function ($resource, API) {
        return $resource(API.uri + '/api/dream/:id', {page: '@page'}, {
            get: {method: 'GET'},
            save: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'}
        });
    });
