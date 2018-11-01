var Sequelize = require('sequelize')
var sequelize = require('../utils/dbconnection')
const Movie = sequelize.define('movies', {
    title: {
      type: Sequelize.STRING
    },
    overview: {
      type: Sequelize.STRING
    },
    genre: {
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
    }
  });
  



module.exports = Movie;