/**
 * Created by cput-user on 2014/10/14.
 */
'use strict';

angular.module('hbcApp')
 .controller('MeasurementsCtrl', function ($scope  , $resource , $baseUrl) {
        log.console(" The URL is ", $baseUrl)

 $scope.getMeasurements = $resource($baseUrl + '/measurement/getMeasurements/412' , {id: '@id'} );

 $scope.measurements = $scope.getMeasurements.query();





 $scope.awesomeThings = [
 'HTML5 Boilerplate',
 'AngularJS',
 'Karma'
 ];
 });

/*var MeasurementsCtrl = angular.module('MeasurementsCtrl' , []);

 MeasurementsCtrl.controller('measureCtrl', ['$scope', 'measurement', function($scope, measurement)
 {
 $scope.measurement = measurement.query();

 }]);*/