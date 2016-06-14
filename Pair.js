var mongoose = require('mongoose');
var schema = mongoose.Schema;
// Scehma for mongoDB students for use it in the model
var pairSchema = new schema({
    id: Number,
    title: String,
    names:[String]
}, {collection: 'pairs'});

var Pair = mongoose.model('Pair', pairSchema);

module.exports = Pair;