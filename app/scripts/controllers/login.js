/**
 * Created by cput-user on 2014/10/15.
 */
'use strict'
angular.module('hbcApp').controller('LoginController', function ($scope) {

    //log.console(" This console", $scope)



    $scope.submitForm = function () {
        if ($scope.userForm.$valid) {
            alert("Form is valid!");
        }
        else {
            alert("Please correct errors!");
            $scope.userForm.submitted = true;
        }
    };
});
