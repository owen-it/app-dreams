'use strict';

/**
 * @ngdoc overview
 * @name DreamApp
 * @description
 * # DreamApp
 *
 * Main module of the application.
 */
angular
    .module('DreamApp', [
        'ngAnimate',
        'ngLocale',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.sortable',
        'ui.router',
        'ui.bootstrap',
        'LocalStorageModule',
        'angular-loading-bar',
        'angular-oauth2'
    ])
    .constant('API', {
        'uri': '/'
    })
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('dream');
    }])
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $urlRouterProvider.otherwise("/welcome");

        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});

        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: "/views/welcome.html",
                controller: 'WelcomeCtrl',
                data: {
                    requireLogin: false
                }
            })
            .state('main', {
                url: '/main',
                templateUrl: "/views/main.html",
                controller: 'MainCtrl',
                data: {
                    requireLogin: true
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: "/views/login.html",
                controller: 'LoginCtrl',
                data: {
                    requireLogin: false
                }
            })
            .state('register', {
                url: '/register',
                templateUrl: "/views/register.html",
                controller: 'LoginCtrl',
                data: {
                    requireLogin: false
                }
            })
            .state('auditing', {
                url: '/auditing',
                templateUrl: "/views/auditing.html",
                controller: 'AuditingCtrl',
                data: {
                    requireLogin: true
                }
            })
            .state('dream', {
                url: '/dream',
                templateUrl: "/views/dream.html",
                controller: 'DreamCtrl',
                data: {
                    requireLogin: true
                }
            })
            .state('members', {
                url: '/members',
                templateUrl: "/views/members.html",
                controller: 'MemberCtrl',
                data: {
                    requireLogin: true
                }
            })
            .state('profile', {
                url: '/profile',
                templateUrl: "/views/profile.html",
                controller: 'MemberCtrl',
                data: {
                    requireLogin: true
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: "/views/about.html",
                controller: 'AboutCtrl',
                data: {
                    requireLogin: true
                }
            });

    }).config(['OAuthProvider', 'OAuthTokenProvider', 'API', function (OAuthProvider, OAuthTokenProvider, API) {
        OAuthProvider.configure({
            baseUrl: API.uri,
            clientId: '1',
            clientSecret: 'secret',
            grantPath: '/oauth/access_token',
            revokePath: '/oauth/revoke_token'
        });

        OAuthTokenProvider.configure({
            name: 'token',
            options: {
                secure: false
            }
        });
    }]).run(['$rootScope', '$window', 'OAuth', function ($rootScope, $window, OAuth, $state) {
        $rootScope.$on('oauth:error', function (event, rejection) {

            // Ignore `invalid_grant` error - should be catched on `LoginController`.
            if ('invalid_grant' === rejection.data.error) {
                return;
            }

            // Refresh token when a `invalid_token` error occurs.
            if ('invalid_token' === rejection.data.error) {
                return OAuth.getRefreshToken();
            }

            // Redirect to `/login` with the `error_reason`.
            $state.go('login', {'error_reason': rejection.data.error});
        });
    }]).run(function ($rootScope, $state, LoginModal, OAuth) {

        $rootScope.isAuthenticated = function(){
            return OAuth.isAuthenticated();
        };

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;

            if (requireLogin && !OAuth.isAuthenticated()) {
                event.preventDefault();

                $state.go('login', {});

            }
        });

    });
