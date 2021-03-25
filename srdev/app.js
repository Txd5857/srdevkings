const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const TeamRoutes = require('./api/routes/team.route');
const BusRoutes = require('./api/routes/bus.route');
// const GuardianRoutes = require('./api/routes/missions');
// const MissionRoutes = require('./api/routes/missions');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});



//Routes 
app.use('/api/teams', TeamRoutes);
app.use('/api/buses', BusRoutes);

app.use('/admin', function(req,res){
    res.sendFile(___dirname + "/html/delete.html");
});

app.use((req,res,next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            status: error
        }
    })
});

module.exports = app;