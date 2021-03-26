const express = require('express');
const veteranRouter = express.Router();
const axios = require('axios');

const veteran_list = [];
veteranRouter.get('/veterans', async(req,res)=>{

    try {
         const veteranAPI = await axios.get('http://localhost:5002/api/veterans');
         console.log(veteranAPI.data);
         veteran_list = veteranAPI.data;
         res.render('veterans', { veterans : veteranAPI.data});
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
    // console.log("try");
    // res.render('veterans');
});

veteranRouter.get('/:id', async(req,res)=>{
    const vetid = req.params.id;
    const url = "http://localhost:5002/api/veterans/"+vetid;

    console.log(url);
    try {
        const veteranAPI = await axios.get('/api/veterans/3700');
        console.log(veteranAPI.data);
        res.render('veteran', { veteran : veteranAPI.data});
   }catch (error) {
       if(error.response){
           console.log(error.response.data);
       }
   }
});



module.exports = veteranRouter;