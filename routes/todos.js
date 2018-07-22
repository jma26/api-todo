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

module.exports = router;