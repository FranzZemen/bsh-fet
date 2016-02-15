(function() {
    var http = require('http');
    var express = require('express');
    var app = express(); // Create express

    // Create the http server and bind request's to express in one shot, or use the .on method of the previous lesson
    const httpServer = http.createServer(app);
    /* Alternative method
     const httpServer = new http.Server();
     httpServer.on('request', app);
     */
    httpServer.listen(80, function () {
        console.log('I\'m listening!')
    });

    /* Second alternative method is a convenience for everything above
     var express = require('express');
     var app = express(); // Create express
     app.listen(80)
     */
})();