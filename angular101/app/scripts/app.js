'use strict';

/**
 * @ngdoc overview
 * @name angular101App
 * @description
 * # angular101App
 *
 * Main module of the application.
 */
angular
  .module('angular101App', [
    'ngRoute',
    'ngSanitize'
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
      .when('/city', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl',
        controllerAs: 'city'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
