const axios = require('axios');
const passport = require('passport');
const initPassportLocal = require("../controllers/passportLocalController");
// Init all passport
initPassportLocal();

let handleHelloWorld = async (req, res) => {
    let userid = req.session.passport.user;

    // construct a server call to find out which pages this user is allowed to view
    const api_url = "http://localhost:5002/api/pages/"+userid;
    try {

        // make the server call so we have a list of pages the user is allowed to view
        const pageAPI = await axios.get(api_url);

        // render the homepage with the list of pages they can access
        return res.render('homepage', { 
             user_id : userid, 
             pages : pageAPI.data
            }
        );
    }catch (error) {
        if(error.response){
            // something went wrong
            // render a homepage with minimal functionality
            return res.render('homepage');
        }
    }
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
