/**
 * Created by cput-user on 2014/10/14.
 */
'use strict';
angular.module('hbcApp')
    .controller('StartUpCtrl', function ($scope) {

        $scope.people = [
            {
                name: 'John Doe',
                city: 'New York City',
                state: 'New York'
            },
            {
                name: 'John Smith',
                city: 'Oklahoma City',
                state: 'Oklahoma'
            },
            {
                name: 'Henry Black',
                city: 'Topeka',
                state: 'Kansas'
            }
        ];
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
