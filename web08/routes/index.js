var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '휘호의 홈페이지', pageName:'home.ejs', inhacode: "12233751" });
});

module.exports = router;
