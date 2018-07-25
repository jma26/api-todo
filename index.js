const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const toDoRoutes = require('./routes/todos');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => response.render('index'));

app.use('/api/todos', toDoRoutes);

const port = 8000;

app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});