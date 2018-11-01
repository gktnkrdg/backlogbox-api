var MovieService = require('../services/movie.service')
var Movie = require('../models/movie.model')
_this = this


exports.getMovies = function(req, res){

   
       Movie.findAll().then(movies => {
             return res.status(200).json({status: 200, data: movies, message: "Succesfully Movie Service Recieved"});
       })
       .catch(((err)=>{
        res.status(400).json({status: 400, message: e.message});
       }));
  
}

exports.createMovie = function(req, res){
   
    var movie = {
        title: req.body.title,
        overview: req.body.overview,
        genres: req.body.genres,
        director: req.body.director ,
        imdb_rating: req.body.imdb_rating ,
        image_url: req.body.image_url,
        release_date: req.body.release_date ,
        title_en: req.body.title_en,
        themoviedb_rating: req.body.themoviedb_rating,
        tagline: req.body.tagline
    }
    try{

      
        Movie.create(movie).then(createMovie => {
        return res.status(201).json({status: 201, data: createMovie, message: "Succesfully Created Movie"})
        })
        }catch(e){
        return res.status(400).json({status: 400, message: e + "Movie Creation was Unsuccesfull"})
        }
}

exports.updateMovie = function(req, res){

    if(!req.body.movie_id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body.movie_id;

 
    var movie = {
       
        title: req.body.title ? req.body.title : null,
        overview: req.body.overview ? req.body.overview : null,
        genres: req.body.genres ? req.body.genres : null,
        director: req.body.director ? req.body.director : null,
        imdb_rating: req.body.imdb_rating ? req.body.imdb_rating : null,
        image_url: req.body.image_url ? req.body.image_url : null,
        release_date: req.body.release_date ? req.body.release_date : null,
        title_en: req.body.title_en ? req.body.title_en : null,
        themoviedb_rating: req.body.themoviedb_rating ? req.body.themoviedb_rating : null,
        tagline: req.body.tagline ? req.body.tagline : null
    }

    
        Movie.update(movie).then(updateMovie => {
         res.status(200).json({status: 200, data: updateMovie, message: "Succesfully Updated Todo"})
        })
        .catch(((err)=>{
        return res.status(400).json({status: 400., message: e.message})
        }))
 
}
exports.getMoviesById = function(req, res){
    var id = req.params.id;
   
    Movie.findById(id).then(movies => {
        return res.status(200).json({status: 200, data: movies, message: "Succesfully Movie Service Recieved"});
    })
    .catch(((err)=>{
        res.status(400).json({status: 400, message: e.message});
    }));

}
exports.removeMovie =  function(req, res){
  
    var id = req.params.id;
    Movie.destroy({
        where: {
          movie_id:req.params.id
        },
       
      }).then(function (deletedRecord) {
        if(deletedRecord === 1){
            res.status(200).json({message:"Deleted successfully"});          
        }
        else
        {
            res.status(404).json({message:"record not found"})
        }
    })
    .catch(function (error){
        res.status(500).json(error);
    });
    
   
  

}