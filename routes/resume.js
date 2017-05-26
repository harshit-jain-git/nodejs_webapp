var express = require('express');
var router = express.Router();

/* GET resume page. */
router.get('/', function(req, res, next) {
    res.render('CV.pdf', { title: 'Resume' });
});

module.exports = router;
