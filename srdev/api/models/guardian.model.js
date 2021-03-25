const express = require("express");
const Router = express.Router();

const mysqlConnection = require("../../db_config/connection");

const Guardian = function(guardian){
    this.guardian_id = guardian.guardian_id,
    this.first_name = guardian.first_name,
    this.middle_initial = guardian.middle_initial,
    this.last_name = guardian.last_name,
    this.gender = guardian.gender,
    this.address = guardian.address,
    this.city = guardian.city,
    this.state = guardian.state,
    this.zip = guardian.zip,
    this.nickname = guardian.nickname,
    this.email = guardian.email,
    this.day_phone = guardian.day_phone,
    this.cell_phone = guardian.cell_phone,
    this.dob = guardian.dob,
    this.occupation = guardian.occupation,
    this.veteran = guardian.veteran,
    this.branch = guardian.branch,
    this.how_heard = guardian.how_heard,
    this.why_volunteering = guardian.why_volunteering,
    this.prior_experience = guardian.prior_experience,
    this.ref_name = guardian.ref_name,
    this.ref_day_phone = guardian.ref_day_phone,
    this.ref_evening_phone = guardian.ref_evening_phone,
    this.ref_address = guardian.ref_address,
    this.ref_relationship = guardian.ref_relationship,
    this.ref_email = guardian.ref_email,
    this.emergency_name = guardian.emergency_name,
    this.emergency_relationship = guardian.emergency_relationship,
    this.emergency_address = guardian.emergency_address,
    this.emergency_day_phone = guardian.emergency_day_phone,
    this.emergency_evening_phone = guardian.emergency_evening_phone,
    this.emergency_cell_phone = guardian.emergency_cell_phone,
    this.particular_veteran = guardian.particular_veteran,
    this.vet_name = guardian.vet_name,
    this.vet_relationship = guardian.vet_relationship,
    this.shirt_size = guardian.shirt_size,
    this.push_veteran = guardian.push_veteran,
    this.med_training = guardian.med_training,
    this.med_conditions = guardian.med_conditions,
    this.app_date = guardian.app_date,
    this.diet_restrictions = guardian.diet_restrictions,
    this.administrative_comments = guardian.administrative_comments,
    this.last_updated = guardian.last_updated
}

// get all teams
Guardian.getAllGuardians = (result) =>{
    mysqlConnection.query('SELECT * FROM guardian', (err, res)=>{
        if(err){
            console.log('Error while fetching guardians', err);
            result(null,err);
        }else{
            console.log('Guardians fetched successfully');
            result(null,res);
        }
    })
}

// get guardian by ID from DB
Guardian.getGuardianByID = (id, result)=>{
    mysqlConnection.query('SELECT * FROM guardian WHERE guardian_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching guardian by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new guardian
Guardian.createGuardian = (teamReqData, result) =>{
    mysqlConnection.query('INSERT INTO guardian SET ? ', teamReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        } else{
            console.log('Guardian created successfully',teamReqData);
            result(null, res);
        }
    })
}

// update guardian
Guardian.updateGuardian = (id, teamReqData, result)=>{
    mysqlConnection.query("UPDATE guardian SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [teamReqData.first_name,teamReqData.last_name,teamReqData.email,teamReqData.phone,teamReqData.organization,teamReqData.designation,teamReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the guardian');
            result(null, err);
        }else{
            console.log("Guardian updated successfully");
            result(null, res);
        }
    });
}

// delete guardian
Guardian.deleteGuardian = (id, result)=>{
    mysqlConnection.query('DELETE FROM guardian WHERE guardian_id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the guardian');
            result(null, err);
        }else{
            result(null, res);
        }
    });
 
}

module.exports = Guardian;

