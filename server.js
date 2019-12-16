// GLOBAL VARIABLES AND DEPENDENCIES //
const mysql = require("mysql");
const inquirer = require('inquirer');


// CONNECTION //
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Pbfxby12!",
  database: "jobs_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Your are now connected with ID: ${connection.threadId}`);
  runSearch();
});

// OPENING SEQUENCE OF QUESTIONS //
function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "Welcome to the THEJOB! What would you like to do?",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add an Employee",
          "Update Employee Role",
          "exit"
        ]

      }).then(function(answer) {
        console.log(answer.action);
        if (answer.action === 'View all Departments') {
            // console.log('view dept')
            viewDept();
        } else if (answer.action === 'View all Roles') {
            // console.log('view role')
            viewRole();
        } else if (answer.action === 'View all Employees') {
            // console.log('view empl')
            viewEmpl();
        } else if (answer.action === 'Add an Employee') {
            // console.log('add empl')
            addEmpl();
        } else if (answer.action === 'Update Employee Role') {
            // console.log('update empl')
            updateEmpl();
        } else {
            // console.log('terminate')
            connection.end();
        };
  });

};

// EXECTUABLE FUNCTIONS THAT CONNECT TO MYSQL // 

function viewDept() {
    const query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Department | Department_ID")
        res.forEach((data) => {
            console.log(`-${data.name}, ${data.department_ID}`);
        })
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        runSearch();
    })
};
    