const express = require('express');
const veteransRouter = express.Router();
const axios = require('axios');


veteransRouter.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  });

// const veteran_list = [];
veteransRouter.get('', async(req,res)=>{
    try {
         const veteranAPI = await axios.get('http://localhost:5002/api/veterans');
        //  console.log("faa",veteranAPI.data);
        //  veteran_list = veteranAPI.data;
         res.render('veterans', { veterans : veteranAPI.data});
         console.log("teat",veterans);
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
    // console.log("try");
    // res.render('veterans');
});

veteransRouter.get('/:id', async(req,res)=>{
    const veteran_id = req.params.id;
    console.log(veteran_id);
    const api_url = "http://localhost:5002/api/veterans/"+veteran_id;
    try {
         const veteranAPI = await axios.get(api_url);
        //  console.log("faa",veteranAPI.data);
        //  veteran_list = veteranAPI.data;
         res.render('veteran', { veteran_id : veteran_id, veteran : veteranAPI.data});
         console.log("completed",veteran);
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
    // console.log("try");
    // res.render('veterans');
});



module.exports = veteransRouter;