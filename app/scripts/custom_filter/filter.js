'use strict';

/**
 * @ngdoc function
 * @name projectApp.filter:NameFilter
 * @description
 * # MainCtrl
 * Controller of the projectApp
 */
angular.module('testApp')
    .filter('NameFilter', function() {
        return function(input) {
            if (!input) {
                return '';

            } else {
                console.log("this is " + input);
                var sName = '';
                var count = input.length;
                for (var i = 0; i < count; i++) {
                    if (input[i] === '@') {
                        break;
                    } else {

                        sName += input[i];
                    }
                }
                return "welcome   " + sName;
            }

        };
    });
