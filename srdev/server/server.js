const mysql = require("mysql");
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejsLayouts = require('express-ejs-layouts');
const http = require("http");

// const TeamRoutes = require("./routes/team.routes");

// var app = express();


const app = require('../app');

// app.set('view engine', 'ejs');
// app.use(ejsLayouts)

// Setup server port

const port = process.env.PORT || 5002;


const server = http.createServer(app);

server.listen(port);

  
