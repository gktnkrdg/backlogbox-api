var express = require('express')

var router = express.Router()

var MovieController = require('../../controllers/movie.controller');

router.get('/', MovieController.getMovies)
router.post('/', MovieController.createMovie)
// router.put('/', MovieController.updateMovie)
// router.delete('/:id',MovieController.removeMovie)

module.exports = router;