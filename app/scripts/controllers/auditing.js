'use strict';

/**
 * @ngdoc function
 * @name DreamApp.controller:AuditingctrlCtrl
 * @description
 * # AuditingctrlCtrl
 * Controller of the DreamApp
 */
angular.module('DreamApp')
  .controller('AuditingCtrl', function ($scope, Auditing) {
        $scope.logs = [];
        Auditing.get({page: $scope.page},
            function success(response) {
                $scope.logs = response.data;
            },
            function error(errorResponse) {
                console.log("Error:" + JSON.stringify(errorResponse));
            }
        );
  });
