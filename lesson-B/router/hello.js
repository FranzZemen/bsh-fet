var express = require('express');
var router = express.Router();

router.get('/forName', function (req,res) {
    res.send(req.query.name);
});


router.get('/', function (req, res) {
    res.send('hi!');
});

module.exports = router;