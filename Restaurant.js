var mongoose = require('mongoose');
var schema = mongoose.Schema;
// Scehma for mongoDB students for use it in the model
var restaurantSchema = new schema({
    id: Number,
    name: String,
    meals: {
        name:String,
        types:{},
        category:String
    },
    reservations:{},
    likes:{
        kosher:[Number],
        vegan:[Number],
        madeInIsrael:[Number]
    },
    image:String,
    address:String
}, {collection: 'restaurant'});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;