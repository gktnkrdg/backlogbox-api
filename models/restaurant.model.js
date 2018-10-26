var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var RestaurantSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

RestaurantSchema.plugin(mongoosePaginate)
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = Restaurant;