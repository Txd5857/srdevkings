
const VeteranModel = require('../models/veteran.model');

// get all veteran list
exports.getVeteranList = (req, res)=> {
    //console.log('here all employees list');
    VeteranModel.getAllVeterans((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Veterans', employees);
        res.send(employees)
    })
}

// get veteran by ID
exports.getVeteranByID = (req, res)=>{
    //console.log('get emp by id');
    VeteranModel.getVeteranByID(req.params.id, (err, veteran)=>{
        if(err)
        res.send(err);
        console.log('single veteran data',veteran);
        res.send(veteran);
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