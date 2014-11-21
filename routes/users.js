var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

// accept PUT request at /user
router.put('/', function (req, res) {
    res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
router.delete('/', function (req, res) {
    res.send('Got a DELETE request at /user');
});

module.exports = router;
