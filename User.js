var mongoose = require('mongoose');
var schema = mongoose.Schema;
// Scehma for mongoDB students for use it in the model
var userSchema = new schema({
    email: String,
    likes: {
        id:Number,
        count:Number
    },
    pair:String
}, {collection: 'users'});

var User = mongoose.model('User', userSchema);

module.exports = User;