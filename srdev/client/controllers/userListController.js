const axios = require('axios');

let handleHelloWorld = async (req, res) => {

    try {
        const userAPI = await axios.get('http://localhost:5002/api/users');

        return res.render('users', { users : userAPI.data});
        
    }catch (error) {
    if(error.response){
        console.log(error.response.data);
    }
    }
};


let handleByeWorld = async (req, res) => {
    const user_id = req.params.id;
    console.log(user_id);
    // const api_url = "http://localhost:5002/api/users/";
    try {
        //  const userAPI = await axios.get(api_url);
        //  return res.render('change_password', { user_id : user_id, user : userAPI.data});
        return res.render('change_password', { user_id : user_id });
    }catch (error) {
        if(error.response){
            return res.render('homepage');
            console.log(error.response.data);
        }
    }
};

let checkUser = async (req, res) => {

};

module.exports = {
    handleHelloWorld: handleHelloWorld,
    handleByeWorld: handleByeWorld,
    checkUser: checkUser
};
