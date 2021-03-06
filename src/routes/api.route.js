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
    if(branch.indexOf('master') > -1){
        deploy(res);
    }
  })
  function deploy(res){
    shell.chmod('u+x', '~/backlogbox/backlogbox-api/deploy.sh');
    shell.exec('~/backlogbox/backlogbox-api/deploy.sh', function(err, stdout, stderr){
        if (err) {
         console.error("error bu   " + err);
         return res.send(500);
        }
        
        return res.status(200).json({status: 200, message: "Succesfully pull recieved"});
      });
  }

module.exports = router;