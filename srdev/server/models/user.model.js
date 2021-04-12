const express = require("express");
const Router = express.Router();
const mysql = require('mysql');
const mysqlConnection = require("../db_config/connection");

const User = function(user){
    this.user_id = user.user_id,
    this.username = user.username,
    this.team_id = user.team_id,
    this.team_color = user.color,
    this.bus_id = user.bus_id,
    this.bus_name = user.name
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
User.getAllUsers = () =>{
    return new Promise( (resolve,reject) => {
        mysqlConnection.query("SELECT * FROM user LEFT JOIN team ON user.teamID = team.team_id LEFT JOIN bus ON bus.bus_id = team.bus_id;", (err, res)=>{
            if(err) {
                return reject(err);
            } 
            for(user in res){
                var index = parseInt(user);
                res[index].role = res[index].username.replace("_"," ");
                res[index].name = res[index].name.replace(" ","_");
            }
            return resolve(res);
        });
    });
  
};

// get user by ID from DB
User.getUserByID = (id, result)=>{
    mysqlConnection.query(`SELECT * FROM user WHERE user.user_id=?`, id, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new user
User.createUser = (userReqData, result) =>{
    mysqlConnection.query('INSERT INTO user SET ? ', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        } else{
            console.log('User created successfully',userReqData);
            result(null, res);
        }
    })
}

// update user
User.updateUser = (id, userReqData, result)=>{
    mysqlConnection.query("UPDATE user SET team_id=?,username=?,password=? WHERE id = ?", [userReqData.team_id,userReqData.username,userReqData.password, id], (err, res)=>{
        if(err){
            console.log('Error while updating the user');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}

// delete user
User.deleteUser = (id, result)=>{
    mysqlConnection.query('DELETE FROM user WHERE user_id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            result(null, res);
        }
    });
 
}

module.exports = User;

