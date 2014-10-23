/**
 * Created by cput-user on 2014/10/08.
 */
'use strict';

/**
 * @ngdoc function
 * @name hbcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hbcApp
 */
angular.module('hbcApp')
    .controller('MensHealthCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });