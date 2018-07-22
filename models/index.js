const mongoose = require('mongoose');
// Debugging purposes
mongoose.set('debug', true);
// Connect to local mongodb
mongoose.connect('mongodb://localhost/todo-api');

// Enable usage of promises
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');

