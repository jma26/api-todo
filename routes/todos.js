const express = require('express');
const router = express.Router();

router.get('/', (request, response) => response.send('Hello, testing'));

module.exports = router;