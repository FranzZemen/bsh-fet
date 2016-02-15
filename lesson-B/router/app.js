(function() {
    var http = require('http');
    var express = require('express');
    var hello = require('./hello');
    var goodBye = require('./goodbye');

    var app = express(); // Create express

    app.use('/hello', hello);
    app.use('/bye', goodBye);

    const httpServer = new http.Server();
    httpServer.on('request', app);
    httpServer.listen(80, function () {
        console.log('I\'m listening!')
    });
})();