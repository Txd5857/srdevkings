
const BusModel = require('../models/bus.model');

// get all bus list
exports.getBusList = (req, res)=> {
    //console.log('here all employees list');
    BusModel.getAllBuss((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Buss', employees);
        res.send(employees)
    })
}

// get bus by ID
exports.getBusByID = (req, res)=>{
    //console.log('get emp by id');
    BusModel.getBusByID(req.params.id, (err, bus)=>{
        if(err)
        res.send(err);
        console.log('single bus data',bus);
        res.send(bus);
    })
}

// create new bus
exports.createNewBus = (req, res) =>{
    const busReqData = new BusModel(req.body);
    console.log('busReqData', busReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        BusModel.createBus(busReqData, (err, bus)=>{
            if(err){
                res.send(err);
            } else {
                res.json({status: true, message: 'Bus Created Successfully', data: bus})
            }
        })
    }
}

// update bus
exports.updateBus = (req, res)=>{
    const busReqData = new BusModel(req.body);
    console.log('busReqData update', busReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        BusModel.updateBus(req.params.id, busReqData, (err, bus)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Bus updated Successfully'})
        })
    }
}

// delete bus
exports.deleteBus = (req, res)=>{
    BusModel.deleteBus(req.params.id, (err, bus)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Bus deleted successully!',data: bus});
    })
}