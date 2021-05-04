const express = require("express");
const Router = express.Router();

const mysqlConnection = require("../db_config/connection");

const Bus = function(bus){
    this.bus_id = bus.bus_id,
    this.mission_id = bus.mission_id,
    this.name = bus.name,
    this.leader_first = bus.leader_first,
    this.leader_last = bus.leader_last,
    this.leader_nametag = bus.leader_nametag,
    this.leader_phone = bus.leader_phone,
    this.leader_tee = bus.leader_tee,
    this.hs_first = bus.hs_first,
    this.hs_last = bus.hs_last,
    this.hs_nametag = bus.hs_nametag,
    this.hs_phone = bus.hs_phone, 
    this.hs_tee = bus.hs_tee,
    this.gl_first = bus.gl_first,
    this.gl_last = bus.gl_last,
    this.gl_nametag = bus.gl_nametag,
    this.gl_phone = bus.gl_phone,
    this.gl_tee = bus.gl_tee
}

// get all buses
Bus.getAllBuses = (result) =>{
    mysqlConnection.query("SELECT veteran.bus_id, bus.name, veteran.med_code, veteran.veteran_id, veteran.med_chair_loc, CONCAT(guardian.last_name, ', ', guardian.first_name) as guardian_name, CONCAT(veteran.last_name, ', ', veteran.first_name) as veteran_name, team.color AS team_color FROM veteran INNER JOIN guardian ON veteran.guardian_id=guardian.guardian_id LEFT JOIN team ON veteran.team_id = team.team_id LEFT JOIN bus ON veteran.bus_id = bus.bus_id WHERE veteran.service_branch IS NOT NULL AND veteran.service_branch != '' ORDER BY veteran_name", (err, res)=>{
        if(err){
            console.log('Error while fetching buses', err);
            result(null,err);
        }else{
            console.log('Buses fetched successfully');
            result(null,res);
        }
    })
}

// get bus by ID from DB
Bus.getBusByID = (id, result)=>{
    mysqlConnection.query('SELECT * FROM bus WHERE bus_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching bus by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new bus
Bus.createBus = (teamReqData, result) =>{
    mysqlConnection.query('INSERT INTO bus SET ? ', teamReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        } else{
            console.log('Bus created successfully',teamReqData);
            result(null, res);
        }
    })
}

// update bus
Bus.updateBus = (id, teamReqData, result)=>{
    mysqlConnection.query("UPDATE bus SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [teamReqData.first_name,teamReqData.last_name,teamReqData.email,teamReqData.phone,teamReqData.organization,teamReqData.designation,teamReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the bus');
            result(null, err);
        }else{
            console.log("Bus updated successfully");
            result(null, res);
        }
    });
}

// delete bus
Bus.deleteBus = (id, result)=>{
    mysqlConnection.query('DELETE FROM bus WHERE bus_id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the bus');
            result(null, err);
        }else{
            result(null, res);
        }
    });
 
}

module.exports = Bus;

