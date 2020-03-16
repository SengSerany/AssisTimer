const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const timer = require('./routes/timer_routes')

const app = express();

require('dotenv').config();

const mongoDB = process.env.mongoDBCluster;
mongoose.connect(mongoDB, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, () =>{});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`### We're connected to database ! ###`)
});

app.set('view engine', 'ejs');
app.use('/', timer);

let port = 4000;

app.listen(port, () => {
    console.log(`The server is actually running on port ${port}`);
});