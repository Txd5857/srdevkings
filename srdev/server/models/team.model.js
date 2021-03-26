const express = require("express");
const Router = express.Router();

const mysqlConnection = require("../db_config/connection");

const Team = function(team){
    this.team_id = team.team_id,
    this.mission_id = team.mission_id,
    this.bus_id = team.bus_id,
    this.leader_id = team.leader_id,
    this.hs_id = team.hs_id,
    this.color = team.color
}

// get all teams
Team.getAllTeams = () =>{
    return new Promise( (resolve,reject) => {
        mysqlConnection.query('SELECT * FROM team', (err, res)=>{
            if(err) {
                return reject(err);
            } 
            return resolve(res);
        });
    });
};

// get team by ID from DB
Team.getTeamByID = (id, result)=>{
    mysqlConnection.query('SELECT * FROM team WHERE team_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching team by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new team
Team.createTeam = (teamReqData, result) =>{
    mysqlConnection.query('INSERT INTO team SET ? ', teamReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        } else{
            console.log('Team created successfully',teamReqData);
            result(null, res);
        }
    })
}

// update team
Team.updateTeam = (id, teamReqData, result)=>{
    mysqlConnection.query("UPDATE team SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [teamReqData.first_name,teamReqData.last_name,teamReqData.email,teamReqData.phone,teamReqData.organization,teamReqData.designation,teamReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the team');
            result(null, err);
        }else{
            console.log("Team updated successfully");
            result(null, res);
        }
    });
}

// delete team
Team.deleteTeam = (id, result)=>{
    mysqlConnection.query('DELETE FROM team WHERE team_id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the team');
            result(null, err);
        }else{
            result(null, res);
        }
    });
 
}

module.exports = Team;

