'use strict';

/**
 * @ngdoc overview
 * @name scratchpadApp
 * @description
 * # scratchpadApp
 *
 * Main module of the application.
 */
angular
  .module('scratchpadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });
