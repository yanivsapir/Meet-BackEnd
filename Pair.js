var mongoose = require('mongoose');
var schema = mongoose.Schema;
var pairSchema = new schema({
    id: Number,
    title: String,
    names:[String]
}, {collection: 'pairs'});

var Pair = mongoose.model('Pair', pairSchema);

module.exports = Pair;