'use strict';

/**
 * @ngdoc service
 * @name angular101App.cityService
 * @description
 * # cityService
 * Service in the angular101App.
 */
angular.module('angular101App')
  .service('cityService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.cities = function () {
      return ['Montreal', 'New York', 'Dallas', 'Los Angeles'];
    };
  });
