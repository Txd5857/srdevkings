const express = require('express');
const veteranRouter = express.Router();
const axios = require('axios');

veteranRouter.get('/veterans', async(req,res)=>{

    try {
         const veteranAPI = await axios.get('http://localhost:5002/api/veterans');
         console.log(veteranAPI.data);
         res.render('veterans', { veterans : veteranAPI.data});
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
    // console.log("try");
    // res.render('veterans');
});

veteranRouter.get('/veterans/:id', (req,res)=>{
    res.render('veteran', {
        id: req.params.id
    });
});

 
veteranRouter.get('/homepage', (req,res)=>{
    res.render('homepage');
});


module.exports = veteranRouter;