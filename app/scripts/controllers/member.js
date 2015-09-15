'use strict';

/**
 * @ngdoc function
 * @name DreamApp.controller:MemberCtrl
 * @description
 * # MemberCtrl
 * Controller of the DreamApp
 */
angular.module('DreamApp')
  .controller('MemberCtrl', function ($scope, Member, localStorageService) {
        $scope.members = [];
        $scope.account = localStorageService.get('account');;
        Member.get({page: $scope.page},
            function success(response) {
                $scope.members = response.data;
            },
            function error(errorResponse) {
                console.log("Error:" + JSON.stringify(errorResponse));
            }
        );
  });
