const express = require('express');
const db = require('../models');

exports.getTodos = (request, response) => {
    db.Todo.find()
    .then((todos) => {
        response.json(todos);
    })
    .catch((error) => {
        response.send(error);
    })
}

exports.createTodo = (request, response) => {
    console.log(request.body);
    db.Todo.create(request.body)
    .then((newTodo) => {
        response.status(201).json(newTodo);
    })
    .catch((error) => {
        response.send(error);
    })
}

exports.getTodo = (request,response) => {
    db.Todo.findById(request.params.id)
    .then((todo) => {
        response.json(todo);
    })
    .catch((error) => {
        response.send(error);
    })
}

exports.updateTodo = (request, response) => {
    db.Todo.findOneAndUpdate({_id: request.params.id}, request.body)
    .then((todo) => {
        response.json(todo);
    })
    .catch((error) => {
        response.send(error);
    })
}

exports.deleteTodo = (request, response) => {
    db.Todo.remove({_id: request.params.id})
    .then(() => {
        response.json({message: 'Task deleted'});
    })
    .catch((error) => {
        response.send(error);
    })
}

module.exports = exports;