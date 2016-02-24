'use strict';

/**
 * @ngdoc function
 * @name anglrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anglrApp
 */
angular.module('testApp')
    .controller('LoginCtrl', function($state,$scope,LoginService) {
        $scope.user = {
                mailId: '',
                password: ''
            },
            $scope.fnLogin = function(user) {
                LoginService.fnSetUserDetails($scope.user);
                $state.go('dashboard');
            }
            /*$scope.fnLogin = function(user) {
                LoginService.userDetails($scope.user.mailId, $scope.user.password);
                $state.go('dashboard');
            };*/


    });
