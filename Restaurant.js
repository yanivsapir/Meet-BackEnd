var mongoose = require('mongoose');
var schema = mongoose.Schema;

var restaurantSchema = new schema({
    id: Number,
    name: String,
    meals: [new schema({
        name: String,
        category: String,
        types : []
    }, {_id: false})],
    reservations:[],
    image:String,
    address:String
}, {collection: 'restaurant'});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;