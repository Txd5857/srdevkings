const express = require('express');
const userRouter = express.Router();
const axios = require('axios');


userRouter.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  });

userRouter.get('', async(req,res)=>{
    try {
         // Get a list of all users in the users table of the database
         // return that list to be rendered for the client.
         // This functionality is only used on the Admin panel.
         const userAPI = await axios.get('http://localhost:5002/api/users');
         res.render('users', { users : userAPI.data});
         console.log("test",users);
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
});

module.exports = userRouter;