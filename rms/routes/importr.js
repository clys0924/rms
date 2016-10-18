var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/rms');

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('importr.html');
});


router.get('/:item/:num',function(req, res, next){
    db.str_item.update({ 'item': req.params.item},{$set:{'num': req.params.num}},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("Import OK");
    }
  });
});

module.exports = router;