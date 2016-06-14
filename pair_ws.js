var mongoose = require('mongoose');
var Pair = require('./Pair');
var Restaurant = require('./Restaurant');
//function return all pairs
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

  var newPair = new Pair({
    title:reqTitle,
    names:descrption
  });

  newPair.save(function(err,pair) {
    if(err)
      res.json("error :", err);
    else{
      updateMeals(reqTitle);
      //need to go and update all dishes with the new pair
      console.log("\n Saved pair : " + pair);
      res.json(pair);
      return;
    }  
  });
}


function updateMeals(reqTitle) {

  /*Restaurant.find({}).exec(function(err,doc){
      if(err) throw err;
      doc.forEach(function(elem, index, array) {
        elem.update( {$push:{reservations : 5 } });
        });
    //doc.update( {$push:{'meals.types' : {reqTitle : false} } });
  });*/
  //Restaurant.update( {}, {$set: {reqTitle:"yesyesyes"}}, false, true);
  /*Restaurant.update({}, { $push: 'meals.types' : {reqTitle : false} , { multi: true }, function (err, raw) {
  if (err) 
    console.log(err);
  console.log('The raw response from Mongo was ', raw);
  });

  /*Restaurant.update({}, { $push: {'meals.types' : {reqTitle : false} },{ multi: true },
  function(err, response)
  {
    if(err)
      console.log("Update error", err);
    else 
      console.log("Update OK");
  });
}*/
  //Restaurant.find({}).set('meals.types.' + reqTitle , false);
   Restaurant.find({}).exec(function(err,restaurant) {
    if(err) throw err;
    restaurant.forEach(function(elem, index, array) {
      //elem.$push:{meals : {'test' : 'cool'}};
      elem.update( {$push:{reservations : 35} });
    });
    console.log(restaurant);
   });
  //Restaurant.find({})
}