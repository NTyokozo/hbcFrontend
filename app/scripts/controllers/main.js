'use strict';

/**
 * @ngdoc function
 * @name hbcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hbcApp
 */
angular.module('hbcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
