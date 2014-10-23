/**
 * Created by cput-user on 2014/10/14.
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
    .controller('CareplanCtrl', function ($scope , $http , $resource , $location , $timeout , $log, baseUrl , $routeParams ) {
        var id = $routeParams.id;

       // $scope.careplanResource = $resource(baseUrl + 'careplan/getplan/' + id + ':124' , {id: '@id'});
        $scope.getCarePlanResource = $resource(baseUrl + 'careplan/getplan/124' , {id: '@id'});
        $scope.careplanResource = $resource(baseUrl + 'careplan/getplan/124' , {id: '@id'});

        $scope.careplan = $scope.getCarePlanResource.query();


        console.log($resource);
        $scope.formdata= $resource;

       <!-- $http.get('json/')-->
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });