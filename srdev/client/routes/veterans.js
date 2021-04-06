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
         console.log(veteranAPI.data);

         // Format Guardian's DOB for display
        veteranAPI.data.guardian_dob_year = veteranAPI.data.guardian_dob.substring(0,4);
        veteranAPI.data.guardian_dob_month = veteranAPI.data.guardian_dob.substring(5,7);
        veteranAPI.data.guardian_dob_day = veteranAPI.data.guardian_dob.substring(8,10);

        // Format Veteran's DOB for display and Calculate age
        veteranAPI.data.dob_year = veteranAPI.data.dob.substring(0,4);
        veteranAPI.data.dob_month = veteranAPI.data.dob.substring(5,7);
        veteranAPI.data.dob_day = veteranAPI.data.dob.substring(8,10);
        currentDate = new Date();
        vetAge = currentDate.getFullYear() - parseInt(veteranAPI.data.dob_year);
        if(currentDate.getMonth()+1 > parseInt(veteranAPI.data.dob_month)){
            veteranAPI.data.age = vetAge;
        } else if(currentDate.getMonth()+1 === parseInt(veteranAPI.data.dob_month) && currentDate.getDate() >= parseInt(veteranAPI.data.dob_day)) {
            veteranAPI.data.age = vetAge;
        } else {
            veteranAPI.data.age = vetAge-1;
        }
    
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