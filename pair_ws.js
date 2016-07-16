var mongoose = require('mongoose');
var Pair = require('./Pair');
var Restaurant = require('./Restaurant');
exports.getAllPairs = function(req,res) 
{
    Pair.find({}).exec(function(err,pairs){
      if(err) throw err;
      res.json(pairs);
      console.log(pairs);
      return;
    });
};


exports.savePair = function(req,res){
  var reqTitle = req.params.title;
  var descrption = [];
  descrption.push(req.params.desc1);
  descrption.push(req.params.desc2);
  Pair.find({'title': reqTitle}).exec(function(err,pairs){
      if(pairs.length == 0){
        var newPair = new Pair({
          title:reqTitle,
          names:descrption
        });

        newPair.save(function(err,pair) {
          if(err)
            res.json("error :", err);
          else{
            return;
          }  
        });
        updateMeals(reqTitle);
        res.json({"response":"success"});
      }else{
        res.send({"response":"exist"});
      }
  });
}


function updateMeals(reqTitle) {
 Restaurant.find({}).exec(function(err,restaurants) {
  if(err){
    throw err;
  }
  
  restaurants.forEach(function(restaurant) {
    restaurant.meals.forEach(function(meal) {
      meal.types.push({"name":reqTitle, "value": false});
    });
    restaurant.save(function(err2,updateObkect){
      if(err2){
        console.log(err2);
      }
    });
  });
});
}