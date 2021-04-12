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
    this.guardian_first_name = veteran.guardian_first_name,
    this.guardian_middle_initial = veteran.guardian_middle_initial,
    this.guardian_last_name = veteran.guardian_last_name,
    this.guardian_gender = veteran.guardian_gender,
    this.guardian_address = veteran.guardian_address,
    this.guardian_city = veteran.guardian_city,
    this.guardian_state = veteran.guardian_state,
    this.guardian_zip = veteran.guardian_zip,
    this.guardian_nickname = veteran.guardian_nickname,
    this.guardian_email = veteran.guardian_email,
    this.guardian_day_phone = veteran.guardian_day_phone,
    this.guardian_cell_phone = veteran.guardian_cell_phone,
    this.guardian_dob = veteran.guardian_dob,
    this.guardian_occupation = veteran.guardian_occupation,
    this.guardian_veteran = veteran.guardian_veteran,
    this.guardian_branch = veteran.guardian_branch,
    this.guardian_how_heard = veteran.guardian_how_heard,
    this.guardian_why_volunteering = veteran.guardian_why_volunteering,
    this.guardian_prior_experience = veteran.guardian_prior_experience,
    this.guardian_ref_name = veteran.guardian_ref_name,
    this.guardian_ref_day_phone = veteran.guardian_ref_day_phone,
    this.guardian_ref_evening_phone = veteran.guardian_ref_evening_phone,
    this.guardian_ref_address = veteran.guardian_ref_address,
    this.guardian_ref_relationship = veteran.guardian_ref_relationship,
    this.guardian_ref_email = veteran.guardian_ref_email,
    this.guardian_emergency_name = veteran.guardian_emergency_name,
    this.guardian_emergency_relationship = veteran.guardian_emergency_relationship,
    this.guardian_emergency_address = veteran.guardian_emergency_address,
    this.guardian_emergency_day_phone = veteran.guardian_emergency_day_phone,
    this.guardian_emergency_evening_phone = veteran.guardian_emergency_evening_phone,
    this.guardian_emergency_cell_phone = veteran.guardian_emergency_cell_phone,
    this.guardian_particular_veteran = veteran.guardian_particular_veteran,
    this.guardian_vet_name = veteran.guardian_vet_name,
    this.guardian_vet_relationship = veteran.guardian_vet_relationship,
    this.guardian_shirt_size = veteran.guardian_shirt_size,
    this.guardian_push_veteran = veteran.guardian_push_veteran,
    this.guardian_med_training = veteran.guardian_med_training,
    this.guardian_med_conditions = veteran.guardian_med_conditions,
    this.guardian_app_date = veteran.guardian_app_date,
    this.guardian_diet_restrictions = veteran.guardian_diet_restrictions,
    this.guardian_administrative_comments = veteran.guardian_administrative_comments,
    this.guardian_last_updated = veteran.guardian_last_updated,
    this.team_color = veteran.team_color
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
        mysqlConnection.query(" SELECT veteran.bus_id, veteran.med_code, veteran.veteran_id, CONCAT(guardian.first_name, ' ', guardian.last_name) as guardian_name, CONCAT(veteran.first_name, ' ', veteran.last_name) as veteran_name, team.color AS team_color FROM veteran INNER JOIN guardian ON veteran.guardian_id=guardian.guardian_id LEFT JOIN team ON veteran.team_id = team.team_id ORDER BY veteran.first_name, veteran.last_name", (err, res)=>{
            if(err) {
                return reject(err);
            } 
            return resolve(res);
        });
    });
  
};

// get veteran by ID from DB
Veteran.getVeteranByID = (id, result)=>{
    mysqlConnection.query(`SELECT veteran.veteran_id, veteran.guardian_id, veteran.guardian_relation, veteran.team_id, veteran.mission_id, veteran.bus_id, veteran.first_name, veteran.middle_initial, veteran.last_name, veteran.nickname, veteran.gender, veteran.address, veteran.city, veteran.state, veteran.zip, veteran.email, veteran.day_phone, veteran.cell_phone, veteran.dob, veteran.weight, veteran.how_heard, veteran.shirt_size, veteran.alt_name, veteran.alt_phone, veteran.alt_email, veteran.alt_relationship, veteran.emergency_name, veteran.emergency_relationship, veteran.emergency_address, veteran.emergency_day_phone, veteran.emergency_cell_phone, veteran.service_branch, veteran.service_rank, veteran.service_years, veteran.service_ww2, veteran.service_korea, veteran.service_cold_war, veteran.service_vietnam, veteran.service_activity, veteran.med_cane, veteran.med_walker, veteran.med_wheelchair, veteran.med_chair_loc, veteran.med_scooter, veteran.med_when_use, veteran.med_list, veteran.med_emphysema, veteran.med_falls, veteran.med_heart_disease, veteran.med_pacemaker, veteran.med_joint_replacement, veteran.med_kidney, veteran.med_diabetes, veteran.med_seizures, veteran.med_urostomy, veteran.med_dimentia, veteran.med_nebulizer, veteran.med_oxygen, veteran.med_football, veteran.med_walk_bus_steps, veteran.med_stroke, veteran.med_urinary, veteran.med_cpap, veteran.med_flow_rate, veteran.med_others, veteran.med_use_mobility, veteran.add_other_vets, veteran.add_vet_names, veteran.add_specific_guardian, veteran.guardian_phone, veteran.add_comments, veteran.med_code, veteran.app_date, veteran.diet_restrictions, veteran.admin_comments, veteran.last_updated,
    guardian.guardian_id, guardian.first_name AS guardian_first_name, guardian.middle_initial AS guardian_middle_initial, guardian.last_name AS guardian_last_name, guardian.gender AS guardian_gender, guardian.address AS guardian_address, guardian.city AS guardian_city, guardian.state AS guardian_state, guardian.zip AS guardian_zip, guardian.nickname AS guardian_nickname, guardian.email AS guardian_email, guardian.day_phone AS guardian_day_phone, guardian.cell_phone AS guardian_cell_phone, guardian.dob AS guardian_dob, guardian.occupation AS guardian_occupation, guardian.veteran AS guardian_veteran, guardian.branch AS guardian_branch, guardian.how_heard AS guardian_how_heard, guardian.why_volunteering AS guardian_why_volunteering, guardian.prior_experience AS guardian_prior_experience, guardian.ref_name AS guardian_ref_name, guardian.ref_day_phone AS guardian_ref_day_phone, guardian.ref_evening_phone AS guardian_ref_evening_phone, guardian.ref_address AS guardian_ref_address, guardian.ref_relationship AS guardian_ref_relationship, guardian.ref_email AS guardian_ref_email, guardian.emergency_name AS guardian_emergency_name, guardian.emergency_relationship AS guardian_emergency_relationship, guardian.emergency_address AS guardian_emergency_address, guardian.emergency_day_phone AS guardian_emergency_day_phone, guardian.emergency_evening_phone AS guardian_emergency_evening_phone, guardian.emergency_cell_phone AS guardian_emergency_cell_phone, guardian.particular_veteran AS guardian_particular_veteran, guardian.vet_name AS guardian_vet_name, guardian.vet_relationship AS guardian_vet_relationship, guardian.shirt_size AS guardian_shirt_size, guardian.push_veteran AS guardian_push_veteran, guardian.med_training AS guardian_med_training, guardian.med_conditions AS guardian_med_conditions, guardian.app_date AS guardian_app_date, guardian.diet_restrictions AS guardian_diet_restrictions, guardian.administrative_comments AS guardian_administrative_comments, guardian.last_updated AS guardian_last_updated,
    team.color AS team_color, team.team_id
    FROM veteran LEFT JOIN guardian ON veteran.guardian_id = guardian.guardian_id
    LEFT JOIN team ON veteran.team_id = team.team_id
    WHERE veteran.veteran_id=?`, id, (err, res)=>{
        if(err){
            console.log('Error while fetching veteran by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new veteran
Veteran.createVeteran = (veteranReqData, result) =>{
    mysqlConnection.query('INSERT INTO veteran SET ? ', veteranReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        } else{
            console.log('Veteran created successfully',veteranReqData);
            result(null, res);
        }
    })
}

// update veteran
Veteran.updateVeteran = (id, veteranReqData, result)=>{
    mysqlConnection.query("UPDATE veteran SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [veteranReqData.first_name,veteranReqData.last_name,veteranReqData.email,veteranReqData.phone,veteranReqData.organization,veteranReqData.designation,veteranReqData.salary, id], (err, res)=>{
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

