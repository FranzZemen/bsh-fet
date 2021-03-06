/* Note the wrapping code.   It is known as an immediately invoked function.  Generally it is good practice as it
enforces a namespace for what's wrapped which can never be seen outside of the function.  Strictly speaking, its not
necessary in node.
*/
(function () {

    // "require" http module
    var http = require('http');

    const httpServer = new http.Server();

    httpServer.listen(82, function () {
        console.log('I\'m listening on port 80!');
    });
})();
