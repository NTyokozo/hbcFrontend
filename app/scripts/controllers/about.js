'use strict';

/**
 * @ngdoc function
 * @name hbcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hbcApp
 */
angular.module('hbcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
