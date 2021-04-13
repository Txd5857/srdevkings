const express = require("express");
const Router = express.Router();
const mysql = require('mysql');
const mysqlConnection = require("../db_config/connection");


const Page = function(page){
    this.userId = page.userId,
    this.sectionID = page.sectionID,
    this.viewable = page.viewable,
    this.editable = page.editable

}

// get all teams
Page.getAllPages = (id, result) =>{
        mysqlConnection.query("select permissions.userID, section.sectionName, section.path from permissions left join section on permissions.sectionID = section.sectionID where permissions.viewable =1 AND permissions.userID = ?", id, (err, res)=>{
            if(err) {   
                result(null, err);
            } else{
                result(null, res);
            }
            
        });
  
};
// // get veteran by ID from DB
Page.getVeteranByID = (id, result)=>{
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

module.exports = Page;
