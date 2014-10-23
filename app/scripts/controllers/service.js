/**
 * Created by cput-user on 2014/10/20.
 */
'use strict';

var measurementService = angular.module ('measurementService',['ngResource']);

measurementService.factory('measurement', ['$resource',
                            function($resource)
                            {
                                return $resource('measurement/:patientID.json' , {} ,
                                    {
                                        query: {method:'GET', params:{patientID:'measurement'}, isArray:true}
                                    });

                            }]);