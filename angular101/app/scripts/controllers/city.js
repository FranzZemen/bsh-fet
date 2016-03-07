'use strict';

/**
 * @ngdoc function
 * @name angular101App.controller:CityCtrl
 * @description
 * # CityCtrl
 * Controller of the angular101App
 */
angular.module('angular101App')
  .controller('CityCtrl', ['$scope','cityService', function ($scope, cityService) {
    $scope.cities = cityService.cities();
  }]);
