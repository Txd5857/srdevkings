const axios = require('axios');

let handleHelloWorld = async (req, res) => {

    try {
        // Make a call to the server and GET all of the users!
        const userAPI = await axios.get('http://localhost:5002/api/users');
        // Pass that data to the users page so it can be rendered and populated
        return res.render('users', { users : userAPI.data});
        
    }catch (error) {
        if(error.response){
            // something went wrong, let's debug it
            console.log(error.response.data);
        }
    }
};


let handleByeWorld = async (req, res) => {
    // Figure out which user's ID was selected to be changed and store in a variable
    const user_id = req.params.id;
    console.log(user_id);
    try {
        // render the change_password page with the targeted user_id
        return res.render('change_password', { user_id : user_id });
    }catch (error) {
        if(error.response){
            // something went wrong, kick the user back to the homepage
            console.log(error.response.data);
            return res.render('homepage');
        }
    }
};


module.exports = {
    handleHelloWorld: handleHelloWorld,
    handleByeWorld: handleByeWorld,
};
