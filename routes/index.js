var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req, res) {
    res.send('Hello World!')
});

router.post('/hello', function (req, res) {
    res.send('Got a POST request');
});

module.exports = router;
