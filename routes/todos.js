const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (request, response) => {
    db.Todo.find()
    .then((todos) => {
        response.json(todos);
    })
    .catch((error) => {
        response.send(error);
    })
});

router.post('/', (request, response) => {
    console.log(request.body);
    db.Todo.create(request.body)
    .then((newTodo) => {
        response.status(201).json(newTodo);
    })
    .catch((error) => {
        response.send(error);
    })
});

router.get('/:id', (request,response) => {
    db.Todo.findById(request.params.id)
    .then((todo) => {
        response.json(todo);
    })
    .catch((error) => {
        response.send(error);
    })
});

router.put('/:id', (request, response) => {
    db.Todo.findOneAndUpdate({_id: request.params.id}, request.body)
    .then((todo) => {
        response.json(todo);
    })
    .catch((error) => {
        response.send(error);
    })
});

module.exports = router;