var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/rms');


router.get('/dict',function(req, res, next){
  db.dc_item.find(function(err,record){
    if(err){
      res.send(err);
    } else {
      res.json(record);
      console.log(record);
    }
  });
});


router.get('/display',function(req, res, next){
  db.str_item.find(function(err,record){
    if(err){
      res.send(err);
    } else {
      console.log("display");
      res.json(record);
    }
  });
});


module.exports = router;