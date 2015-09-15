'use strict';

/**
 * @ngdoc function
 * @name DreamApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the DreamApp
 */
angular.module('DreamApp')
  .controller('LoginCtrl', function ($rootScope, $scope, OAuth, OAuthToken, $state, localStorageService, Account, Login){

        $rootScope.info = 'You need this logged in to share your dreams';
        $scope.isAlert = false;
        $scope.user = {
            username: '',
            password: ''
        };

        $scope.isAuthenticated = function()
        {
            return OAuth.isAuthenticated();
        };

        $scope.setAccount = function()
        {
            Account.get({page: $scope.page},
                function success(account) {
                    localStorageService.set('account', account);
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
            );
        };

        $rootScope.getAccount = function()
        {
            return localStorageService.get('account');
        };

        $scope.in = function()
        {
            OAuth.getAccessToken({
                username: $scope.user.email,
                password: $scope.user.password
            }).then(
                function(){
                    $scope.setAccount();
                    $state.go('dream', {});
                },
                function(){
                    $scope.isAlert = true;
                }
            );
        };

        $scope.logout = function()
        {
            localStorageService.set('account', {});
            OAuthToken.removeToken()
            $state.go('main', {});
        };

        $scope.register = function(){
            $scope.errorCreateUser = null;
            Login.register({}, $scope.user,
                function success(response) {
                    $scope.in();
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
            );
        };

  });
