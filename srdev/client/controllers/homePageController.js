const axios = require('axios');
const passport = require('passport');
const initPassportLocal = require("../controllers/passportLocalController");
// Init all passport
initPassportLocal();

let handleHelloWorld = async (req, res) => {
    let userid = req.session.passport.user;
    let userrole = req.session;
    console.log(userrole);

    // return res.render('homepage', { user_id : userid, user:userid });
    // console.log(req.session,"test")

    const api_url = "http://localhost:5002/api/pages/"+userid;
    try {
         const pageAPI = await axios.get(api_url);
         return res.render('homepage', { user_id : userid, pages : pageAPI.data});
    }catch (error) {
        if(error.response){
            return res.render('homepage');
        }
    }
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
