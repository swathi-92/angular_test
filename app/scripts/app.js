'use strict';

/**
 * @ngdoc overview
 * @name anglrApp
 * @description
 * # anglrApp
 *
 * Main module of the application.
 */
angular
    .module('testApp', [
        'ui.router',
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'

    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/logform.html',
                controller: 'LoginCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'dashCtrl'
            });

        $urlRouterProvider.otherwise('/home');

    });
