'use strict';

var app = angular.module('publicApp', [
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
      .when('/typingtest', {
        templateUrl: 'views/typingTest.html',
        controller: 'TypingTestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
