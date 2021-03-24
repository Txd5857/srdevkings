const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "honor_flight",
    multipleStatements: true
});

mysqlConnection.connect((error) =>{ 

    if(!error){
        console.log("Connected to Mysql");

    } else {
        console.log("Not connected to mysql", error);
    }
});

module.exports = mysqlConnection;