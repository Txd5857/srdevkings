
const VeteranModel = require('../models/veteran.model');

// get all veteran list
exports.getVeteranList = async (req, res,next)=> {
    //console.log('here all employees list');
    try{
        let results = await VeteranModel.getAllVeterans();
        console.log(results);
        res.json(results);
    }catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
   
}

// get veteran by ID
exports.getVeteranByID = (req, res)=>{
    //console.log('get emp by id');
    VeteranModel.getVeteranByID(req.params.id, (err, veteran)=>{
        if(err)
        res.send(err);
        console.log('single veteran data',veteran[0]);
        res.send(veteran[0]);
    })
}

// create new veteran
exports.createNewVeteran = (req, res) =>{
    const veteranReqData = new VeteranModel(req.body);
    console.log('veteranReqData', veteranReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        VeteranModel.createVeteran(veteranReqData, (err, veteran)=>{
            if(err){
                res.send(err);
            } else {
                res.json({status: true, message: 'Veteran Created Successfully', data: veteran})
            }
        })
    }
}

// update veteran
exports.updateVeteran = (req, res)=>{
    const veteranReqData = new VeteranModel(req.body);
    console.log('veteranReqData update', veteranReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        VeteranModel.updateVeteran(req.params.id, veteranReqData, (err, veteran)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Veteran updated Successfully'})
        })
    }
}

// delete veteran
exports.deleteVeteran = (req, res)=>{
    VeteranModel.deleteVeteran(req.params.id, (err, veteran)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Veteran deleted successully!',data: veteran});
    })
}