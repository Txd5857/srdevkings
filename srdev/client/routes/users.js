const express = require('express');
const userRouter = express.Router();
const axios = require('axios');


userRouter.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  });

// const user_list = [];
userRouter.get('', async(req,res)=>{
    try {
         const userAPI = await axios.get('http://localhost:5002/api/users');
        //  console.log("faa",userAPI.data);
        //  user_list = userAPI.data;
         res.render('users', { users : userAPI.data});
         console.log("teat",users);
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
    // console.log("try");
    // res.render('users');
});

// usersRouter.get('/:id', async(req,res)=>{
//     const user_id = req.params.id;
//     console.log(user_id);
//     const api_url = "http://localhost:5002/api/users/"+user_id;
//     try {
//          const userAPI = await axios.get(api_url);
//          console.log(userAPI.data);
    
//         res.render('user', { user_id : user_id, user : userAPI.data});
//         console.log("completed",user);
//     }catch (error) {
//         if(error.response){
//             console.log(error.response.data);
//         }
//     }
//     // console.log("try");
//     // res.render('users');
// });



module.exports = userRouter;