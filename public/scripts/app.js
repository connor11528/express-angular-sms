'use strict';

var app = angular.module('express-angular-sms', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fileupload', {
        templateUrl: 'views/fileupload.html',
        controller: 'FileUploadCtrl'
      })
      .when('/typingtest', {
        templateUrl: 'views/typingTest.html',
        controller: 'TypingTestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
