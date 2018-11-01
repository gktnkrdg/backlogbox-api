var Sequelize = require('sequelize')
var sequelize = require('../utils/dbconnection')
const Movie = sequelize.define('movies', {
    movie_id:{
        autoincrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
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
        type: Sequelize.INTEGER, primaryKey: true
    }
  });
  



module.exports = Movie;