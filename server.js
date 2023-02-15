const express = require('express');
const bodyparser = require('body-parser');
const routes=require('./Router/router');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(routes);


app.listen(3024);
console.log("server running on 3024");