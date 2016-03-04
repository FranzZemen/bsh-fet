'use strict';

/**
 * @ngdoc function
 * @name scratchpadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scratchpadApp
 */
angular.module('scratchpadApp')
    .controller('MainCtrl', ['$log', function ($log) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $log.info('Hello World');
        $log.debug('This is a debug statement');
        $log.error(new Error('This is my error'));


    }]);
