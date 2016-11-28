var express = require('express');
//var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//db.collection('users').findOne({},function(err,doc){
	//	if(err) throw err;
	//	res.send(doc);
	//});
	
	sess = req.session;
	sess.username = "velopert";
	
	res.render('index', { title: 'index' });
});

router.get('/test', function(req, res, next) {
	//sess = req.session;
	sess = req.session;
	console.log(sess.username);
	//res.render('index', { title: 'test' });
});

module.exports = router;
