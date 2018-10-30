var MovieService = require('../services/movie.service')

_this = this


exports.getMovies = function(req, res){

    try{
        var movies = MovieService.getMovies()
        return res.status(200).json({status: 200, data: movies, message: "Succesfully MovieService Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createMovie = async function(req, res, next){
    var movie = {
        title: req.body.title,
        overview: req.body.overview,
        status: req.body.status ,
        genre:req.body.genre ,
        director:req.body.director,
        year:req.body.year,
        imdbRating:req.body.imdbRating,
        rottenTomatoesRating:req.body.rottenTomatoesRating,
        image:req.body.image
    }

    try{

      
        var createMovie = await MovieService.createMovie(movie)
     
        return res.status(201).json({status: 201, data: createMovie, message: "Succesfully Created Movie"})
    }catch(e){
        return res.status(400).json({status: 400, message: e + "Movie Creation was Unsuccesfull"})
    }
}

exports.updateMovie = async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var movie = {
        id,
        title: req.body.title ? req.body.title : null,
        overview: req.body.overview ? req.body.overview : null,
        status: req.body.status ? req.body.status : null,
        genre: req.body.genre ? req.body.genre : null,
        director: req.body.director ? req.body.director : null,
        year: req.body.year ? req.body.year : null,
        imdbRating: req.body.imdbRating ? req.body.imdbRating : null,
        rottenTomatoesRating: req.body.rottenTomatoesRating ? req.body.rottenTomatoesRating : null,
        image: req.body.image ? req.body.image : null
    }

    try{
        var updateMovie = await MovieService.updateMovie(movie)
        return res.status(200).json({status: 200, data: updateMovie, message: "Succesfully Updated Tod"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeMovie = async function(req, res, next){
  
    var id = req.params.id;
    console.log("id = " +  req.params.id)
    try{
        var deleted = await MovieService.deleteMovie(id)
        return res.status(200).json({status:200, message: "Succesfully Movie Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}