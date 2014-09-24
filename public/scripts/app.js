'use strict';

var app = angular.module('express-angular-sms', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .state('logout', {
        url: '/logout',
        template: null, 
        controller: 'LogoutCtrl'
      })
      .state('profile', {
        url: '/profile', 
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        // resolve: {
        //   authenticated: function($location, $auth){
        //     if(!$auth.isAuthenticated()){
        //       return $location.path('/login');
        //     }
        //   }
        // }
      })
      .state('fileupload', {
        url: '/fileupload',
        templateUrl: 'views/fileupload.html',
        controller: 'FileUploadCtrl'
      })
      .state('typingtest', {
        url: '/typingtest',
        templateUrl: 'views/typingTest.html',
        controller: 'TypingTestCtrl'
      });
      
      $urlRouterProvider.otherwise('/');
  });
