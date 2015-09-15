'use strict';

/**
 * @ngdoc function
 * @name DreamApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the DreamApp
 */
angular.module('DreamApp')
  .controller('WelcomeCtrl', function ($rootScope) {
        $rootScope.info = "Make your dreams your goals";
  });
