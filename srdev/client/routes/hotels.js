const express = require('express');
const hotelRouter = express.Router();
const axios = require('axios');


hotelRouter.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  });

// const veteran_list = [];
hotelRouter.get('', async(req,res)=>{
    try {
        //  const hotelAPI = await axios.get('http://localhost:5002/api/hotels');
        //  console.log("faa",veteranAPI.data);
        //  veteran_list = veteranAPI.data;
        //  res.render('hotel_reservations', { hotel_reservations : hotelAPI.data});
         res.render('hotel_reservations');
         console.log("teat",hotel_reservations);
    }catch (error) {
        if(error.response){
            console.log(error.response.data);
        }
    }
    // console.log("try");
    // res.render('veterans');
});

// hotelRouter.get('/:id', async(req,res)=>{
//     const veteran_id = req.params.id;
//     console.log(veteran_id);
//     const api_url = "http://localhost:5002/api/veterans/"+veteran_id;
//     try {
//          const veteranAPI = await axios.get(api_url);
//          console.log(veteranAPI.data);
    
//         res.render('veteran', { veteran_id : veteran_id, veteran : veteranAPI.data});
//         console.log("completed",veteran);
//     }catch (error) {
//         if(error.response){
//             console.log(error.response.data);
//         }
//     }
    // console.log("try");
    // res.render('veterans');
// });



module.exports = hotelRouter;