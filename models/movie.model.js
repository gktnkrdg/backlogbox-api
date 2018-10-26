var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var MovieSchema = new mongoose.Schema({
    title: String,
    overview: String,
    status: String,
    genre:String,
    director:String,
    year:String,
    imdbRating:String,
    rottenTomatoesRating:String,
    image:String,
    movieId:Number,
    createDate: Date,
})

MovieSchema.plugin(mongoosePaginate)
const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie;