
const MissionModel = require('../models/mission.model');

// get all mission list
exports.getMissionList = (req, res)=> {
    MissionModel.getAllMissions((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Missions', employees);
        res.send(employees)
    })
}

// get mission by ID
exports.getMissionByID = (req, res)=>{
    MissionModel.getMissionByID(req.params.id, (err, mission)=>{
        if(err)
        res.send(err);
        console.log('single mission data',mission);
        res.send(mission);
    })
}

// create new mission
exports.createNewMission = (req, res) =>{
    const missionReqData = new MissionModel(req.body);
    console.log('missionReqData', missionReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        MissionModel.createMission(missionReqData, (err, mission)=>{
            if(err){
                res.send(err);
            } else {
                res.json({status: true, message: 'Mission Created Successfully', data: mission})
            }
        })
    }
}

// update mission
exports.updateMission = (req, res)=>{
    const missionReqData = new MissionModel(req.body);
    console.log('missionReqData update', missionReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        MissionModel.updateMission(req.params.id, missionReqData, (err, mission)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Mission updated Successfully'})
        })
    }
}

// delete mission
exports.deleteMission = (req, res)=>{
    MissionModel.deleteMission(req.params.id, (err, mission)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Mission deleted successully!',data: mission});
    })
}