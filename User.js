var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
    email: String,
    likes: [],
    pair:String,
    role:String
}, {collection: 'users'});

var User = mongoose.model('User', userSchema);

module.exports = User;