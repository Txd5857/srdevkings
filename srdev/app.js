const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require('hbs');
const exphbs = require('express-handlebars');


//api routes
const TeamRoutes = require('./server/routes/team.route');
const BusRoutes = require('./server/routes/bus.route');
const GuardianRoutes = require('./server/routes/guardian.route');
const MissionRoutes = require('./server/routes/mission.route');
const VeteranRoutes = require('./server/routes/veteran.route');

//page routes 
const pageRoute = require("./client/routes/pages"); 

const publicDir = path.join(__dirname, 'client/public'); // Public Directory
app.use(express.static(publicDir));                         // Serve files in public directory

// app.use('/static', express.static(publicDir));
// app.use(express.static("public"));
// app.use(express.static("public"));

// app.use('/static', express.static(path.join(__dirname, 'public')))

// hbs.registerPartials(__dirname + '/client/views/partials', function (err) {});
app.use(morgan('dev'));
app.set('view engine', 'hbs');                              // Set view engine: Handlebars
// app.engine('hbs',exphbs({
//     extname: 'hbs',
//     defaultLayout: 'app',
//     // layoutsDir: __dirname + '/client/views/layouts',
//     partialsDir: __dirname + '/client/views/partials'
// }))
app.set('views', path.join(__dirname, '/client/views')); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// const navbar = handlebars.compile(fs.readFileSync(__dirname + '/templates/partials/navbar.hbs').toString('utf-8'));
// hbs.registerPartial('navv', 'navigation')

let apiroutes = [BusRoutes, TeamRoutes, GuardianRoutes, MissionRoutes, VeteranRoutes];
// API Routes 
app.use('/', pageRoute);

app.use('/api',apiroutes);


app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});



// app.use((req,res,next) => {
//     const error = new Error("Not Found");
//     error.status = 404;
//     next(error);
// });

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