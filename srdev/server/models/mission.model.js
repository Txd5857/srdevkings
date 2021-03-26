const express = require("express");
const Router = express.Router();

const mysqlConnection = require("../db_config/connection");

const Mission = function(mission){
    this.mission_id = mission.mission_id,
    this.title = mission.title,
    this.flight_num = mission.flight_num,
    this.show_on_front = mission.show_on_front,
    this.start_date = mission.start_date,
    this.end_date = mission.end_date
}

// get all teams
Mission.getAllMissions = (result) =>{
    mysqlConnection.query('SELECT * FROM mission', (err, res)=>{
        if(err){
            console.log('Error while fetching mission', err);
            result(null,err);
        }else{
            console.log('Missiones fetched successfully');
            result(null,res);
        }
    })
}

// get mission by ID from DB
Mission.getMissionByID = (id, result)=>{
    mysqlConnection.query('SELECT * FROM mission WHERE mission_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching mission by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new mission
Mission.createMission = (teamReqData, result) =>{
    mysqlConnection.query('INSERT INTO mission SET ? ', teamReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        } else{
            console.log('Mission created successfully',teamReqData);
            result(null, res);
        }
    })
}

// update mission
Mission.updateMission = (id, teamReqData, result)=>{
    mysqlConnection.query("UPDATE mission SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [teamReqData.first_name,teamReqData.last_name,teamReqData.email,teamReqData.phone,teamReqData.organization,teamReqData.designation,teamReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the mission');
            result(null, err);
        }else{
            console.log("Mission updated successfully");
            result(null, res);
        }
    });
}

// delete mission
Mission.deleteMission = (id, result)=>{
    mysqlConnection.query('DELETE FROM mission WHERE mission_id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the mission');
            result(null, err);
        }else{
            result(null, res);
        }
    });
 
}

module.exports = Mission;

