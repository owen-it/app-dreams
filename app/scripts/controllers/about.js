'use strict';

/**
 * @ngdoc function
 * @name DreamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the DreamApp
 */
angular.module('DreamApp')
  .controller('AboutCtrl', function ($rootScope) {
        $rootScope.info = 'Well, now I\'ll tell you a little about the auditing';
  });
