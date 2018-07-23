const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const toDoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => response.send('Welcome to the Root route!'));

app.use('/api/todos', toDoRoutes);

const port = 8000;

app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});