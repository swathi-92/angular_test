'use strict';
var app = angular.module('testApp');
app.directive('headr', function() {
    return {

        restrict: 'C',
        templateUrl: 'views/head.html',
    };

});
