var express = require('express');
var router = express.Router();

/* GET admin listing. */
router.get('/', function(req, res) {
  res.render('index',{admin: true});
});

module.exports = router;
