var express = require('express')
var shell = require('shelljs');
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
      console.log(req)
    if(branch.indexOf('master') > -1){
        console.log("works")
        deploy(res);
    }
  })
  function deploy(res){
    chmod('u+x', '~/backlogbox/backlogbox-api/deploy.sh');
    shell.exec('~/backlogbox/backlogbox-api/deploy.sh', function(err, stdout, stderr){
        if (err) {
         console.error(err);
         return res.send(500);
        }
        res.send(200);
      });
  }
module.exports = router;