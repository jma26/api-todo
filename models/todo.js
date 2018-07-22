const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: 'Task cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

const Todo = mongoose.model('Todo', toDoSchema);

module.exports = Todo;
