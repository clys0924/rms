var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/rms');


router.get('/',function(req, res, next){
    res.render('dict.html');
});

router.get('/delete/:item',function(req, res, next){
    db.dc_item.remove({'item': req.params.item},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("delete dict OK");
    }
  });
    db.str_item.remove({'item': req.params.item},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("delete str OK");
    }
  });
});


router.get('/add/:item/:unit/:mfrs',function(req, res, next){
    db.dc_item.insert({'item': req.params.item,'unit': req.params.unit,'mfrs': req.params.mfrs},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("add dict OK");
    }
  });
    db.str_item.insert({'item': req.params.item,'num': "0"},function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("add str OK");
    }
  });
});

module.exports = router;