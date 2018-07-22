const express = require('express');
const app = express();

const port = 8000;

app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});