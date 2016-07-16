var express = require('express');  
var bodyParser = require('body-parser');
var restaurants = require('./restaurant_ws'); 
var pairs = require('./pair_ws');
var user = require('./user_ws'); 
var url = require('url');
var app = express(); 
var port = process.env.PORT || 3000; 

app.set('port',port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',express.static('./public'));
app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.set("Content-Type", "application/json");
  next();
});


app.get('/', function (req, res) { 
    res.status(200).json({status:true, message:"Restaurant app"}); 
});

app.get('/getAllRestaurants',restaurants.getAllRestaurants);
app.get('/getAllDishes',restaurants.getAllDishes);
app.post('/saveReservations/:firstorders/:firstorderssum/:secondorder/:secondordersum/:date/:restaurantID',restaurants.saveReservations);
app.post('/saveMeals',restaurants.saveMeals);

app.get('/getUserByMail/:email',user.getUserByMail);
app.post('/setUserPair/:email/:title',user.setUserPair);
app.post('/setUserLikes/:email/:resId/:toRemove',user.setUserLikes);
app.post('/setUserPair/:email/:userPair',user.setUserPair);

app.get('/getAllPairs',pairs.getAllPairs);
app.post('/savePair/:title/:desc1/:desc2',pairs.savePair);

app.listen(port);
console.log('Node app is running on port', port);