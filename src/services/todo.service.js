var Todo = require('../models/todo.model')

_this = this

exports.getTodos = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var todos = await Todo.paginate(query, options)
        return todos;
    } catch (e) {
        throw Error('Error while Paginating Movies')
    }
}

exports.createTodo = async function(todo){
    
    var newTodos = new Todo({
        title: todo.title,
        description: todo.description,
        date: new Date(),
        status: todo.status
    })
 
    try{
        var savedTodo = await newTodos.save()
        return savedTodo;
    }catch(e){
        throw Error("Error while Creating Movie")
    }
}

exports.updateTodo = async function(todo){
    var id = todo.id

    try{
        var oldTodo = await Todo.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Movie")
    }

    if(!oldTodo){
        return false;
    }


    oldTodo.title = todo.title
    oldTodo.description = todo.description
    oldTodo.status = todo.status


  

    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Movie");
    }
}

exports.deleteTodo = async function(id){
    
    try{
        var deleted = await Todo.remove({_id: id})
        if(deleted.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}