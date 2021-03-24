
const GuardianModel = require('../models/guardian.model');

// get all guardian list
exports.getGuardianList = (req, res)=> {
    //console.log('here all employees list');
    GuardianModel.getAllGuardians((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Guardian', employees);
        res.send(employees)
    })
}

// get guardian by ID
exports.getGuardianByID = (req, res)=>{
    //console.log('get emp by id');
    GuardianModel.getGuardianByID(req.params.id, (err, guardian)=>{
        if(err)
        res.send(err);
        console.log('single guardian data',guardian);
        res.send(guardian);
    })
}

// create new guardian
exports.createNewGuardian = (req, res) =>{
    const guardianReqData = new GuardianModel(req.body);
    console.log('guardianReqData', guardianReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        GuardianModel.createGuardian(guardianReqData, (err, guardian)=>{
            if(err){
                res.send(err);
            } else {
                res.json({status: true, message: 'Guardian Created Successfully', data: guardian})
            }
        })
    }
}

// update guardian
exports.updateGuardian = (req, res)=>{
    const guardianReqData = new GuardianModel(req.body);
    console.log('guardianReqData update', guardianReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        GuardianModel.updateGuardian(req.params.id, guardianReqData, (err, guardian)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Guardian updated Successfully'})
        })
    }
}

// delete guardian
exports.deleteGuardian = (req, res)=>{
    GuardianModel.deleteGuardian(req.params.id, (err, guardian)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Guardian deleted successully!',data: guardian});
    })
}