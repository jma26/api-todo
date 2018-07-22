const mongoose = require('mongoose');
// Debugging purposes
mongoose.set('debug', true);
// Connect to local mongodb
mongoose.connect('mongodb://localhost:27017/todo-api', { useNewUrlParser: true });

// Enable usage of promises
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');

