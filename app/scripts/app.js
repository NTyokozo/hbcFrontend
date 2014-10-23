'use strict';

/**
 * @ngdoc overview
 * @name hbcApp
 * @description
 * # hbcApp
 *
 * Main module of the application.
 */
angular
  .module('hbcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'



  ])
  .constant('baseUrl', 'http://155.238.32.89:9000/api/')
  .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/toolStater', {
            templateUrl: 'views/toolStater.html',
            controller: 'ToolStaterCtrl'
        })
        .when('/cbsFinal', {
            templateUrl: 'views/cbsFinal.html',
            controller: 'CbsFinalCtrl'
        })
        .when('/cbsMedical', {
            templateUrl: 'views/cbsMedical.html',
            controller: 'CbsMedicalCtrl'
        })
        .when('/cbsMedicalCon', {
            templateUrl: 'views/cbsMedicalCon.html',
            controller: 'CbsMedicalConCtrl'
        })
        .when('/PersonInformation', {
            templateUrl: 'views/PersonInformation.html',
            controller: 'PersonInformationCtrl'
        })
        .when('/childHealth', {
            templateUrl: 'views/childHealth.html',
            controller: 'ChildHealthCrl'
        })
        .when('/childAssessment', {
            templateUrl: 'views/childAssessment.html',
            controller: 'childAssessmentCtrl'
        })
        .when('/childPerInfor', {
            templateUrl: 'views/childPerInfor.html',
            controller: 'ChildPerInforCrl'
        })
        .when('/childAssessmentCon', {
            templateUrl: 'views/childAssessmentCon.html',
            controller: 'childAssessmentContCtrl'
        })
        .when('/childFinal', {
            templateUrl: 'views/childFinal.html',
            controller: 'childFinalCtrl'
        })
        .when('/tbTool', {
            templateUrl: 'views/tbTool.html',
            controller: 'tbToolCtrl'
        })
        .when('/tbPersonalInfor', {
            templateUrl: 'views/tbPersonalInfor.html',
            controller: 'tbPersonalInforCtrl'
        })
        .when('/symptoms', {
            templateUrl: 'views/symptoms.html',
            controller: 'SymptomsCtrl'
        })
        .when('/symptomsCon', {
            templateUrl: 'views/symptomsCon.html',
            controller: 'SymptomsConCtrl'
        })
        .when('/tbFinal', {
            templateUrl: 'views/tbFinal.html',
            controller: 'tbFinalCtrl'
        })
        .when('/mensHealth', {
            templateUrl: 'views/mensHealth.html',
            controller: 'MensHealthCtrl'
        })
        .when('/mensPersonInfor', {
            templateUrl: 'views/mensPersonInfor.html',
            controller: 'MensPersonInforCtrl'
        })
        .when('/maleAssessment', {
            templateUrl: 'views/maleAssessment.html',
            controller: 'MaleAssessCtrl'
        })
        .when('/maleAssessCon', {
            templateUrl: 'views/maleAssessCon.html',
            controller: 'MaleAssessConCtrl'
        })
        .when('/maleFinal', {
            templateUrl: 'views/maleFinal.html',
            controller: 'MaleFinalCtrl'
        })
        .when('/womensHealth', {
            templateUrl: 'views/womensHealth.html',
            controller: 'WomensHealthCtrl'
        })
        .when('/womenPersonInfor', {
            templateUrl: 'views/womenPersonInfor.html',
            controller: 'WomenPersonInforCtrl'
        })
        .when('/womenAssess', {
            templateUrl: 'views/womenAssess.html',
            controller: 'WomenAssesCtrl'
        })
        .when('/womenAssessCon', {
            templateUrl: 'views/womenAssessCon.html',
            controller: 'WomenAssesConCtrl'
        })
        .when('/womenAssessPreg', {
            templateUrl: 'views/womenAssessPreg.html',
            controller: 'womenAssessPregCtrl'
        })
        .when('/womenFinal', {
            templateUrl: 'views/womenFinal.html',
            controller: 'WomenFinalCtrl'
        })
        .when('/cbsDefaulter', {
            templateUrl: 'views/cbsDefaulter.html',
            controller: 'CbsDefaulterCtrl'
        })
        .when('/cbsDefaulterFor', {
            templateUrl: 'views/cbsDefaulterFor.html',
            controller: 'CbsDefaulterForCtrl'
        })
        .when('/cbsDefaulterFinal', {
            templateUrl: 'views/cbsDefaulterFinal.html',
            controller: 'CbsDefaulterFinalCtrl'
        })
        .when('/menuPage', {
            templateUrl: 'views/menuPage.html',
            controller: 'menuPageCtrl'
        })
        .when('/menu', {
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        })
        .when('/measurement', {
            templateUrl: 'views/measurement.html',
            controller: 'MeasurementsCtrl'
        })
        .when('/unplannedVisit', {
            templateUrl: 'views/unplannedVisit.html',
            controller: 'UnplannedVisitCtrl'
        })
        .when('/schedule', {
            templateUrl: 'views/schedule.html',
            controller: 'ScheduleCtrl'
        })
        .when('/careplan', {
            templateUrl: 'views/careplan.html',
            controller: 'CareplanCtrl'
        })
        .when('/startUp', {
            templateUrl: 'views/startUp.html',
            controller: 'StartUpCtrl'
        })
        .when('/report', {
            templateUrl: 'views/report.html',
            controller: 'ReportCtrl'
        })
        .when('/patientDetails', {
            templateUrl: 'views/patientDetails.html',
            controller: 'PatientDetailsCtrl'
        })
        .when('/preMenu', {
            templateUrl: 'views/preMenu.html',
            controller: 'PreMenuCtrl'
        })
        .when('/datePicker' , {
            controller: 'DatePickerCtrl'
        })
        .otherwise({
        redirectTo: '/'
      });
  })
