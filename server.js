var express = require('express');    
var app = express(); 
var url = require('url');
var port = process.env.PORT || 3000; 
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://db_usr:db_pass@ds023593.mlab.com:23593/db_meet');
//var Restaurant = require('./Restaurant');
var restaurants = require('./restaurant_ws'); 
var pairs = require('./pair_ws');
var user = require('./user_ws'); 
//var Restaurants;

app.set('port',port);
app.use('/',express.static('./public'));
app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  //res.set('json spaces', 4);
  res.set("Content-Type", "application/json");
  next();
});


app.get('/', function (req, res) { 
    res.status(200).json({status:true, message:"Restaurant app"}); 
});

app.get('/getAllRestaurants',restaurants.getAllRestaurants);
app.get('/getAllDishes',restaurants.getAllDishes);

app.get('/getUserByMail/:email',user.getUserByMail);
app.post('/setUserPair/:email/:title',user.setUserPair);

app.get('/getAllPairs',pairs.getAllPairs);
app.post('/savePair/:title/:desc1/:desc2',pairs.savePair);

app.listen(port);
console.log('Node app is running on port', process.env.PORT);


