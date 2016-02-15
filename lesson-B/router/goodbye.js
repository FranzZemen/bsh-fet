var express = require('express');
var router = express.Router();

router.get('/:name', function (req,res) {
    res.send(req.params.name);
});

router.get('/', function (req, res) {
    res.send('chow!');
});


module.exports = router;