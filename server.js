// GLOBAL VARIABLES AND DEPENDENCIES //
const mysql = require("mysql");


// CONNECTION //
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Pbfxby12!",
  database: "jobs_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(`Your are now connected with ID: ${connection.threadId}`);
});