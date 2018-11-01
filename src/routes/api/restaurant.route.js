var express = require('express')

var router = express.Router()

var RestaurantController = require('../../controllers/restaurant.controller');

router.get('/', RestaurantController.getRestaurants)

router.post('/', RestaurantController.createRestaurant)
router.put('/', RestaurantController.updateRestaurant)
router.delete('/:id',RestaurantController.removeRestaurant)

module.exports = router;