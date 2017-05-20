var express = require('express');
var router = express.Router();

/* GET career page. */
router.get('/', function(req, res, next) {
    res.render('career', { title: 'Career' });
});

module.exports = router;
