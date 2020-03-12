const express = require('express');
const bodyParser = require('body-parser');

const timer = require('./routes/timer_routes')

const app = express();

app.set('view engine', 'ejs');
app.use('/', timer);

let port = 4000;

app.listen(port, () => {
    console.log(`The server is actually running on port ${port}`);
});