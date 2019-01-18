var express = require('express');
var router = express.Router();

var products = ["jambon", "petits fours", "saucisses", "crudités"];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Charcuterie Denis', products }
  );
});

router.get('/shop', function(req, res, next) {
  req.session.name = req.query.name;
  res.render('shop', { product: req.session.name}
  );
});

router.post('/shop-quantity', function(req, res, next) {
  req.session.quantity = req.body.quantity;
  res.render('shop-quantity', { quantity: req.session.quantity}
  );
});

module.exports = router;
