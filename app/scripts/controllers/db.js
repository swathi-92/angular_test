'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:dashCtrl
 * @description
 * # dashCtrl
 * Controller of the projectApp
 */
angular.module('testApp')
    .controller('dashCtrl', function($scope, $state) {
        $scope.btn = 'logOut';
        $scope.fnLogOut = function() {
            location.reload(true);
            $state.go('home');
        };
    });
