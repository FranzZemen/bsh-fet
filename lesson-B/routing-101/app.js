(function() {
    var http = require('http');
    var express = require('express');
    var goodBye = require('./goodbye');

    var app = express(); // Create express

    function indexHandler (req, res) {
        var myObj = {root: '/', helloWorld: 'helloWorld'};
        res.status(200).send(myObj);
    }

    app.get('/', indexHandler);

    app.get('/helloWorld', function (req, res) {
        res.status(200).send('Back at you!');
    });

    app.get('/bye', goodBye);

    app.get('/id/:name', function (req, res) {
        var name = req.params.name;
        res.status(200).send(name);
    });

    const httpServer = new http.Server();
    httpServer.on('request', app);
    httpServer.listen(80, function () {
        console.log('I\'m listening!')
    });
})();