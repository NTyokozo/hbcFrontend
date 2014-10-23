/**
 * Created by cput-user on 2014/10/16.
 */
'use strict'

angular.module('hbcApp').directive('datepicker', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, currentEl, attr) {

            $(currentEl).datepicker({
                dateformat: 'yy-mm-dd',
               onSelect: function(dateText) {
                 scope.apply(function() {
                       ngModel.$setViewValue(dateText)
                   })
               }
            })

        }
    }
});