var mongoose = require('mongoose');
var Restaurant = require('./Restaurant');
var url = require('url');

exports.getAllRestaurants = function(req,res) 
{
  Restaurant.find({}).exec(function(err,restaurant){
    if(err) throw err;
    res.json(restaurant);
    console.log(restaurant);
    return;
  });
};

exports.getAllDishes = function(req,res) 

{
    var urlParse = url.parse(req.url ,true);
    var query = urlParse.query;
    Restaurant.find({}).select('meals -_id').exec(function(err,restaurant){
        if(err) throw err;
        res.json(restaurant);
        console.log(restaurant);
        return;
    });
};

exports.saveReservations = function(req,res){
  var firstOrder = req.params.firstorders;
  var firstOrderSum = req.params.firstorderssum;
  var secondOrder = req.params.secondorder;
  var secondOrderSum = req.params.secondordersum;
  var date = req.params.date;
  var id = req.params.restaurantID;

  var newReservation = {};
  newReservation[firstOrder] = firstOrderSum;
  newReservation[secondOrder] = secondOrderSum;
  newReservation["date"] = date;

  Restaurant.findOne({'id':id}, function(err,foundObject){
    if(err){
        console.log(err);
        res.status(500).send();
    }
    else{
        if(foundObject==null){
            res.status(404).send(); 
        }
        foundObject.reservations.push(newReservation);
        foundObject.save(function(err,updateObkect){
            if(err){
                console.log(err);
                res.status(500).send();
            }
            else
                res.send(updateObkect);
        });
    };
  });
}

exports.saveMeals = function(req,res){
  Restaurant.findOne({ id: req.body.id },function(err,restaurant){
        if(err) throw err;
        restaurant.meals = req.body.meals;
        restaurant.save(function(err,updateObkect){
            if(err){
                console.log(err);
                res.json({"response":"error"});
            }
            else
                res.json({"response":"success"});
        });
        return;
    });
}