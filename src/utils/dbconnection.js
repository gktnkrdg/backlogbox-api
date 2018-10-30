
var mysql = require('mysql');
   var connection = mysql.createConnection({
        host: "backlogbox.cupg23erkn75.us-east-2.rds.amazonaws.com",
        user: "backlogbox",
        password: "kabuto!_213",
          database : 'backlogbox',
          port: 3306,
      });

      connection.connect(function(err) {
        if (err){
            throw err;
        } 
        else{
            console.log("Mysql Connected")
        }
    });

  module.exports=connection;
  