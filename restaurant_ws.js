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