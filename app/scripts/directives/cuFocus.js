/**
 * Created by cput-user on 2014/10/16.
 */
'use strict'

angular.module('hbcApp').directive('cuFocus', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, currentEl, attrs, ctrl ){
            ctrl.$focused = false;
            /*$element.bind('focus', function() {
                scope.$apply(function () {
                    ctrl.$focused = true;
                });
            }).bind('blur', function(e) {
                scope.$apply(function(){ ctrl.$focused = false; });

            }); */
        }
    }
});