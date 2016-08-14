var express = require('express');
var router = express.Router();

router.get('/views/:view_name', function(req, res) {
    res.render(req.param.view_name);
});

router.get('/', function(req, res) {
    res.render('index');
});

module.exports = router;