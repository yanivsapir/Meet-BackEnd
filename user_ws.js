var mongoose = require('mongoose');
var User = require('./User');

exports.getUserByMail = function(req,res) 
{
    var userMail = req.params.email;
    User.findOne({
        'email': userMail
    }).exec(function(err,user){
        if(err) throw err;
        if(!user)
        {
            user = new User();
            user.role = "Diner";
            user.email = userMail;
            user.likes = [];
            user.pair = "isKosher";
            user.save();
        }
        res.json(user);
        return;
    });
};

exports.setUserPair = function(req,res) 
{
    var userMail = req.params.email;
    var pairTitle = req.params.title;
    console.log(userMail + pairTitle);
    User.findOne({ email: userMail }, function (err, user){
        if(err) throw err;
        if(!user){
            res.json("No such User");
            return
        }   
        user.pair = pairTitle;
        user.save();
        res.json("succfully update : " + user);
        return;
    });
};

exports.setUserLikes = function(req,res)
{
    var userMail = req.params.email;
    var resId = req.params.resId;
    var toRemove = req.params.toRemove;
    User.findOne({ email: userMail }, function (err, user){
        if(err) throw err;
        if(!user){
            res.json("No such User");
            return
        }   
        if(parseInt(toRemove) == 1)
        {
            user.likes.splice(user.likes.indexOf(resId),1);
        }else if(user.likes.indexOf(resId) == -1){
            user.likes.push(parseInt(resId));
            user.likes.sort(sortNumber);
        }
        user.save();
        res.json("successfully update : " + user);
        return;
    });
};

exports.setUserPair = function(req,res)
{
    var userMail = req.params.email;
    var userPair = req.params.title;
    User.findOne({ email: userMail }, function (err, user){
        if(err) throw err;
        if(!user){
            res.json("No such User");
            return
        } 
        user.pair = userPair; 
        user.save();
        res.json("successfully update : " + user);
        return;
    });
};

function sortNumber(a,b) {
    return a - b;
}