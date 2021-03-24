
const TeamModel = require('../models/team.model');

// get all team list
exports.getTeamList = (req, res)=> {
    //console.log('here all employees list');
    TeamModel.getAllTeams((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Teams', employees);
        res.send(employees)
    })
}

// get team by ID
exports.getTeamByID = (req, res)=>{
    //console.log('get emp by id');
    TeamModel.getTeamByID(req.params.id, (err, team)=>{
        if(err)
        res.send(err);
        console.log('single team data',team);
        res.send(team);
    })
}

// create new team
exports.createNewTeam = (req, res) =>{
    const teamReqData = new TeamModel(req.body);
    console.log('teamReqData', teamReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        TeamModel.createTeam(teamReqData, (err, team)=>{
            if(err){
                res.send(err);
            } else {
                res.json({status: true, message: 'Team Created Successfully', data: team})
            }
        })
    }
}

// update team
exports.updateTeam = (req, res)=>{
    const teamReqData = new TeamModel(req.body);
    console.log('teamReqData update', teamReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        TeamModel.updateTeam(req.params.id, teamReqData, (err, team)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Team updated Successfully'})
        })
    }
}

// delete team
exports.deleteTeam = (req, res)=>{
    TeamModel.deleteTeam(req.params.id, (err, team)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Team deleted successully!',data: team});
    })
}