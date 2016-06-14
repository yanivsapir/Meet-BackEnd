var mongoose = require('mongoose');
var User = require('./User');

exports.getUserByMail = function(req,res) 
{
    var userMail = req.params.email;
    console.log(userMail);
    //console.log(studentsGrades);
    //db.users.find( {  } )
    User.findOne({
        'email': userMail
    }).exec(function(err,user){
        if(err) throw err;
        if(!user)
        {
            res.json("No such User");
            return;
        }
        res.json(user);
        console.log(user);
        return;
    });
};

exports.setUserPair = function(req,res) 
{
    var userMail = req.params.email;
    var pairTitle = req.params.title;
    console.log(userMail + pairTitle);
    //console.log(studentsGrades);
    //db.users.find( {  } )
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