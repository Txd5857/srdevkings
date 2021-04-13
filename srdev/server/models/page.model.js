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
        mysqlConnection.query("select permissions.userID, section.sectionName, section.path from permissions left join section on permissions.sectionID = section.sectionID where permissions.viewable = 1 AND section.path != '' AND permissions.userID = ?", id, (err, res)=>{
            if(err) {   
                result(null, err);
            } else{
                result(null, res);
            }
            
        });
  
};
// // get

module.exports = Page;
