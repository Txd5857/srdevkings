const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const ejsLayouts = require('express-ejs-layouts');
const http = require("http");

// const TeamRoutes = require("./routes/team.routes");

// var app = express();
// app.set('view engine', 'ejs');
// app.use(ejsLayouts)

const app = require('./app');

// Setup server port

const port = process.env.PORT || 5002;


const server = http.createServer(app);

server.listen(port);
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
// // parse requests of content-type - application/json
// app.use(bodyParser.json())
// // define a root route
// app.get('/', (req, res) => {
//   res.send("Hello World");
// });

// app.get('/teams', (req, res) => {
//     res.send("Hello team");
// });
  

// // listen for requests
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });