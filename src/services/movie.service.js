var Movie = require('../models/movie.model')
var db=require('../utils/dbconnection');
_this = this


exports.getMovies = function(result) {
    console.log("rest test :")
    var apiResult = {};
    db.query('SELECT * from movies ', function (error, results, fields) {
        //if error, print blank results
        if (error) {
            // console.log(error);
         
            
            apiResult.meta = {
                table: "movies",
                type: "collection",
                total: 0
            }
            //create an empty data table
            apiResult.data = [];
            
            //send the results (apiResult) as JSON to Express (res)
            //Express uses res.json() to send JSON to client
            //you will see res.send() used for HTML
          
            
        }
        
        //make results 
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);
     

            
       // create a meta table to help apps
       //do we have results? what section? etc
        apiResult.meta = {
            table: "movies",
            type: "collection",
            total: 1,
            total_entries: 0
        }
        
        //add our JSON results to the data table
        apiResult.data = resultJson;
    });
    console.log(apiResult)
    return apiResult;
};

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