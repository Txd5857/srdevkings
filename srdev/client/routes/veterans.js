const express = require('express');
const veteransRouter = express.Router();
const axios = require('axios');


veteransRouter.use(function timeLog (req, res, next) {
    // This is just for timestamp logging purposes
    console.log('Time: ', Date.now())
    next()
  });

veteransRouter.get('', async(req,res)=>{
    try {
         // pull the entire veterans table from the database
         const veteranAPI = await axios.get('http://localhost:5002/api/veterans');
         // render the veterans page with the data from the veterans page
         res.render('veterans', { veterans : veteranAPI.data});
         console.log("veteran data... ",veterans);
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
});

// Get info for a specific veteran using their veteran_id
veteransRouter.get('/:id', async(req,res)=>{
    const veteran_id = req.params.id;
    console.log(veteran_id);
    // Construct the endpoint and query parameters to hit the server with
    const api_url = "http://localhost:5002/api/veterans/"+veteran_id;
    try {
         // execute the GET request to our server with the url we constructed
         const veteranAPI = await axios.get(api_url);
         console.log(veteranAPI.data);
    
        // render the veteran profile page with the data we got from our request
        res.render('veteran', { veteran_id : veteran_id, veteran : veteranAPI.data});
        console.log("completed",veteran);
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
});



module.exports = veteransRouter;