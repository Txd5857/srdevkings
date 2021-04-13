const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require('hbs');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const connectFlash =require("connect-flash");


//api routes
const TeamRoutes = require('./server/routes/team.route');
const UserRoutes = require('./server/routes/user.route');
const BusRoutes = require('./server/routes/bus.route');
const GuardianRoutes = require('./server/routes/guardian.route');
const MissionRoutes = require('./server/routes/mission.route');
const VeteranRoutes = require('./server/routes/veteran.route');
const FileRoutes = require('./server/routes/file.route');
const PagesRoutes = require('./server/routes/page.route');
const initWebRoutes = require('./client/routes/web')
//page routes 
const pageRoute = require("./client/routes/pages"); 
const apiRoute = [BusRoutes, TeamRoutes, GuardianRoutes, MissionRoutes, VeteranRoutes, UserRoutes, FileRoutes, PagesRoutes];
const authRoute = require('./client/routes/auth');

const publicDir = path.join(__dirname, 'client/public'); // Public Directory
app.use(express.static(publicDir));                         // Serve files in public directory

// app.use('/static', express.static(publicDir));
// app.use(express.static("public"));

//use cookie parser
app.use(cookieParser('secret'));

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));


// Enable body parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// init all web routes
initWebRoutes(app);

app.use(morgan('dev'));

app.set('view engine', 'hbs');     

const partialsDir = __dirname + '/client/views/partials';
const filenames = fs.readdirSync(partialsDir);
filenames.forEach(function (filename) {
  const matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  const name = matches[1];
  const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

hbs.registerHelper('ifEquals', function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
});

app.set('views', path.join(__dirname, 'client/views')); 
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


// Pages
// app.use('/', pageRoute);
// initWebRoutes(app);

// API
app.use('/api',apiRoute);
// AUTH
app.use('/auth', authRoute)

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
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