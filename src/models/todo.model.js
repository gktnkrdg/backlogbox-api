var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

TodoSchema.plugin(mongoosePaginate)
const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;