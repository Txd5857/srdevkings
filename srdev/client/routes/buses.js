const express = require('express');
const busRouter = express.Router();
const axios = require('axios');


busRouter.use(function timeLog (req, res, next) {
    // This is just for timestamp logging purposes
    console.log('Time: ', Date.now())
    next()
  });

busRouter.get('', async(req,res)=>{
    try {
         // Grab all of the information from the buses table in the database
         // and pass that data to the page so it can be populated after it is rendered
         const busAPI = await axios.get('http://localhost:5002/api/buses');
         res.render('buses', { buses : busAPI.data});
         console.log("bus data...",buses);
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
});

module.exports = busRouter;