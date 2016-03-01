(function () {
    'use strict'

    var debugLevel =  require('./constants');
    //var bunyan = require('bunyan');
    //var log = bunyan.createLogger({name: 'bunyan.js'});
    var log = require('bunyan').createLogger({name: 'bunyan.js', level:debugLevel});

    log.info('Hello World');

    var myObj = {id: {oid: 101, name: 'Franz'}, info: {occupation: 'Technologist', likes: 'cycling'}};

    log.info('User Info', myObj);

    log.debug('This is debug');

    var err = new Error('This is an error');
    log.error(err);


})();
