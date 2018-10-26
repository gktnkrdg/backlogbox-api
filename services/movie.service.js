var Movie = require('../models/movie.model')

_this = this


exports.getMovies = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var movies = await Movie.paginate(query, options)
        return movies;
    } catch (e) {
        throw Error('Error while Paginating Movies')
    }
}

exports.createMovie = async function(movie){
    

    var new_movie = new Movie(movie)
    console.log(new_movie)
    try{
        var savedMovie = await new_movie.save()   
        return savedMovie 
    }catch(e){
        throw Error("Error while Creating Movie")
    }
}

exports.updateMovie = async function(movie){
    var id = movie.id
    console.log("id " + id )
    try{
       
        await Movie.findOneAndUpdate({_id: id}, movie, {new: true}, function(err, movie) {
            if (err)
            throw Error("Error occured while Finding the Movie")
            return movie;
          
          });
        }
    catch(e){
        throw Error("Error occured while Finding the Movie")
    }
}

exports.deleteMovie = async function(id){

    try{
        console.log("id = "+ id)
        var deleted = await Movie.deleteOne({_id: id})
        console.log(deleted)
        if(deleted.n === 0){
            throw Error("Movie Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error( e + "Error Occured while Deleting the Movie")
    }
}