var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/peliculas/', function(req, res, next) {
  res.render('peliculas/index');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.get('/peliculas/editar', function(req, res, next) {
  res.render('peliculas/editar');
});

router.get('/peliculas/nueva', function(req, res, next) {
  res.render('peliculas/nueva');
});


module.exports = router;
