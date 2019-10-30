var Sequelize = require('sequelize')
var sequelize = require('../utils/dbconnection')
const Movie = sequelize.define('movies', {
    title: {
      type: Sequelize.STRING
    },
    overview: {
      type: Sequelize.STRING
    },
    genres: {
        type: Sequelize.STRING
    },
    director: {
        type: Sequelize.STRING
    },
    imdb_rating: {
        type: Sequelize.STRING
    },
    movie_id: {
        type: Sequelize.INTEGER, primaryKey: true , autoIncrement:true
    },
    image_url: {
        type: Sequelize.STRING
    },
    release_date: {
        type: Sequelize.DATE
    },
    title_en: {
        type: Sequelize.STRING
    },
    themoviedb_rating: {
        type: Sequelize.STRING
    },
    tagline: {
        type: Sequelize.STRING
    }
  },{
    timestamps: false
});
  



module.exports = Movie;