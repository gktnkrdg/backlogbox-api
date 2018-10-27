var express = require('express')

var router = express.Router()
var movies = require('./api/movies.route')
var restaurants = require('./api/restaurant.route')
var todos = require('./api/todos.route')

router.use('/movies', movies);
router.use('/restaurants', restaurants);
router.use('/todos', todos);
router.use('/github',  function (req, res) {
    var sender = req.body.sender;
    var branch = req.body.ref;
  
    if(branch.indexOf('master') > -1){
        console.log("works")
    }
  })
module.exports = router;