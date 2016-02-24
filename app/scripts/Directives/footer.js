'use strict';
var app = angular.module('testApp');
app.directive('myDirective', function() {
    return {

        template: '<button>Logout </button>'
    };
});
