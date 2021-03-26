const express = require("express");
const Router = express.Router();
const mysql = require('mysql');
const mysqlConnection = require("../db_config/connection");

const Veteran = function(veteran){
    this.veteran_id = veteran.veteran_id,
    this.guardian_id = veteran.guardian_id,
    this.guardian_relation = veteran.guardian_relation,
    this.team_id = veteran.team_id,
    this.mission_id = veteran.mission_id,
    this.bus_id = veteran.bus_id,
    this.first_name = veteran.first_name,
    this.middle_initial = veteran.middle_initial,
    this.last_name = veteran.last_name,
    this.nickname = veteran.nickname,
    this.gender = veteran.gender,
    this.address = veteran.address,
    this.city = veteran.city,
    this.state = veteran.state,
    this.zip = veteran.zip,
    this.email = veteran.email,
    this.day_phone = veteran.day_phone,
    this.cell_phone = veteran.cell_phone,
    this.dob = veteran.dob,
    this.weight = veteran.weight,
    this.how_heard = veteran.how_heard,
    this.shirt_size = veteran.shirt_size,
    this.alt_name = veteran.alt_name,
    this.alt_phone = veteran.alt_phone,
    this.alt_email = veteran.alt_email,
    this.alt_relationship = veteran.alt_relationship,
    this.emergency_name = veteran.emergency_name,
    this.emergency_relationship = veteran.emergency_relationship,
    this.emergency_address = veteran.emergency_address,
    this.emergency_day_phone = veteran.emergency_day_phone,
    this.emergency_cell_phone = veteran.emergency_cell_phone,
    this.service_branch = veteran.service_branch,
    this.service_rank = veteran.service_rank,
    this.service_years = veteran.service_years,
    this.service_ww2 = veteran.service_ww2,
    this.service_korea = veteran.service_korea,
    this.service_cold_war = veteran.service_cold_war,
    this.service_vietnam = veteran.service_vietnam,
    this.service_activity = veteran.service_activity,
    this.med_cane = veteran.med_cane,
    this.med_walker = veteran.med_walker,
    this.med_wheelchair = veteran.med_wheelchair,
    this.med_chair_loc = veteran.med_chair_loc,
    this.med_scooter = veteran.med_scooter,
    this.med_when_use = veteran.med_when_use,
    this.med_list = veteran.med_list,
    this.med_emphysema = veteran.med_emphysema,
    this.med_falls = veteran.med_falls,
    this.med_heart_disease = veteran.med_heart_disease,
    this.med_pacemaker = veteran.med_pacemaker,
    this.med_joint_replacement = veteran.med_joint_replacement,
    this.med_kidney = veteran.med_kidney,
    this.med_diabetes = veteran.med_diabetes,
    this.med_seizures = veteran.med_seizures,
    this.med_urostomy = veteran.med_urostomy,
    this.med_dimentia = veteran.med_dimentia,
    this.med_nebulizer = veteran.med_nebulizer,
    this.med_oxygen = veteran.med_oxygen,
    this.med_football = veteran.med_football,
    this.med_walk_bus_steps = veteran.med_walk_bus_steps,
    this.med_stroke = veteran.med_stroke,
    this.med_urinary = veteran.med_urinary,
    this.med_cpap = veteran.med_cpap,
    this.med_flow_rate = veteran.med_flow_rate,
    this.med_others = veteran.med_others,
    this.med_use_mobility = veteran.med_use_mobility,
    this.add_other_vets = veteran.add_other_vets,
    this.add_vet_names = veteran.add_vet_names,
    this.add_specific_guardian = veteran.add_specific_guardian,
    this.guardian_phone = veteran.guardian_phone,
    this.add_comments = veteran.add_comments,
    this.med_code = veteran.med_code,
    this.app_date = veteran.app_date,
    this.diet_restrictions = veteran.diet_restrictions,
    this.admin_comments = veteran.admin_comments,
    this.last_updated = veteran.last_updated
}
const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'password',
    user: 'root',
    database: 'honor_flight',
    host: 'localhost',
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000
});
// get all teams
Veteran.getAllVeterans = () =>{
    return new Promise( (resolve,reject) => {
        mysqlConnection.query('SELECT * FROM veteran', (err, res)=>{
            if(err) {
                return reject(err);
            } 
            return resolve(res);
        });
    });
  
};

// get veteran by ID from DB
Veteran.getVeteranByID = (id, result)=>{
    mysqlConnection.query('SELECT * FROM veteran WHERE veteran_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching veteran by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new veteran
Veteran.createVeteran = (teamReqData, result) =>{
    mysqlConnection.query('INSERT INTO veteran SET ? ', teamReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        } else{
            console.log('Veteran created successfully',teamReqData);
            result(null, res);
        }
    })
}

// update veteran
Veteran.updateVeteran = (id, teamReqData, result)=>{
    mysqlConnection.query("UPDATE veteran SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [teamReqData.first_name,teamReqData.last_name,teamReqData.email,teamReqData.phone,teamReqData.organization,teamReqData.designation,teamReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the veteran');
            result(null, err);
        }else{
            console.log("Veteran updated successfully");
            result(null, res);
        }
    });
}

// delete veteran
Veteran.deleteVeteran = (id, result)=>{
    mysqlConnection.query('DELETE FROM veteran WHERE veteran_id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the veteran');
            result(null, err);
        }else{
            result(null, res);
        }
    });
 
}

module.exports = Veteran;

