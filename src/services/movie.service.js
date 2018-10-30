var Movie = require('../models/movie.model')
_this = this


exports.getMovies = function(result) {
    console.log("rest test :")
   
    return Movie.findAll().then(projects => {
           
      })
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