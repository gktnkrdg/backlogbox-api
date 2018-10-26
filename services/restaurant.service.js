var Restaurant = require('../models/restaurant.model')

_this = this


exports.getRestaurant = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var restaurant = await Restaurant.paginate(query, options)
        return restaurant;
    } catch (e) {
        throw Error('Error while Paginating Restaurant')
    }
}

exports.createRestaurant = async function(restaurant){
    
    var newRestaurant = new Restaurant({
        title: restaurant.title,
        description: restaurant.description,
        date: new Date(),
        status: restaurant.status
    })
 
    try{
        var savedRestaurant = await newRestaurant.save()
        return savedRestaurant;
    }catch(e){
        throw Error("Error while Creating Restaurant")
    }
}

exports.updateRestaurant = async function(restaurant){
    var id = restaurant.id

    try{
        var oldRestaurant= await Restaurant.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Restaurant")
    }
    if(!oldRestaurant){
        return false;
    }



    oldRestaurant.title = restaurant.title
    oldRestaurant.description = restaurant.description
    oldRestaurant.status = restaurant.status


    console.log(oldRestaurant)

    try{
        var savedRestaurant = await oldRestaurant.save()
        return savedRestaurant;
    }catch(e){
        throw Error("And Error occured while updating the Restaurant");
    }
}

exports.deleteRestaurant = async function(id){
    
    try{
        var deleted = await Restaurant.remove({_id: id})
        if(deleted.n === 0){
            throw Error("Restaurant Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Restaurant Occured while Deleting the Restaurant")
    }
}