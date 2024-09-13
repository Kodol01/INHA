var express = require('express');
var router = express.Router();

router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'kakao/book.ejs' });
});


router.get('/cart', function(req, res){
  res.render('index', {title:'장바구니', pageName:'kakao/cart.ejs'});
});



module.exports = router;