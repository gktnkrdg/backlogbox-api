var RestaurantService = require('../services/restaurant.service')

_this = this


exports.getRestaurants = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 
    try{
        var restaurant = await RestaurantService.getRestaurant({}, page, limit)
        return res.status(200).json({status: 200, data: restaurant, message: "Succesfully Restaurant  Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createRestaurant = async function(req, res, next){
    var restaurant = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try{
        var createRestaurant = await RestaurantService.createRestaurant(restaurant)
     
        return res.status(201).json({status: 201, data: createRestaurant, message: "Succesfully Created Restaurant"})
    }catch(e){
        return res.status(400).json({status: 400, message: e + "Movie Creation was Unsuccesfull"})
    }
}

exports.updateRestaurant = async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var restaurant = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updateRestaurant = await RestaurantService.updateRestaurant(restaurant)
        return res.status(200).json({status: 200, data: updateRestaurant, message: "Succesfully Updated Restaurant"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeRestaurant = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await RestaurantService.deleteRestaurant(id)
        return res.status(200).json({status:200, message: "Succesfully Restaurant Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}