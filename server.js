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
            console.log('Connection to server will now terminate')
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
        console.log("Department | Department ID")
        res.forEach((data) => {
            console.log(`-${data.name}, ${data.department_ID}`);
        })
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        runSearch();
    })
};


function viewRole() {
    const query = "SELECT * FROM role ORDER BY role_ID DESC";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Title | Salary | Department ID | Role ID")
        res.forEach((data) => {
            console.log(`-${data.title}, ${data.salary}, ${data.department_ID}, ${data.role_ID}`);
        })
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        runSearch();
    })
};


function viewEmpl() {
    const query = "SELECT * FROM employee ORDER BY employee_id DESC";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("First Name | Last Name | Employee ID | Role ID | Manager ID")
        res.forEach((data) => {
            console.log(`-${data.first_name}, ${data.last_name}, ${data.employee_ID}, ${data.role_ID}, ${data.manager_ID}`);
        })
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        runSearch();
    })
};


function addEmpl() {
    inquirer
    .prompt([
    {
      name: 'firstName',
      message: 'Please enter the employees first name',
      default: '*FirstName*',
    },
    {
      name: 'lastName',
      message: 'Please enter the employees last name',
      default: '*LastName*',
    },
    {
        name: 'employeeID',
        message: 'Please assign employee an ID (must be numerical)',
        default: '*EmployeeID*',
    },
    {
        name: "roleID",
        type: "list",
        message: "Please select a the employees position by their RoleID",
        choices: [
          "100",
          "101",
          "102",
          "200",
          "201",
          "202",
          "300",
          "301",
          "302"
        ]
    },
    {
        name: 'managerID',
        message: 'Please assign employee a manager',
        default: '*ManagerID*',
    }
    ]).then(function(answer) {
        // console.log(answer);
        const query ="INSERT INTO employee (first_name,last_name,employee_ID,role_ID,manager_ID) VALUES (?,?,?,?,?)"
        connection.query(query, [answer.firstName,answer.lastName,answer.employeeID,answer.roleID,answer.managerID], function(err, data) {
            // console.log(data);
        })
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`${answer.firstName} ${answer.lastName} has been entered into the system, Welcome!`);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        runSearch();
    })
};


function updateEmpl() {
    inquirer
    .prompt([
    {
      name: 'employeeID',
      message: 'Please seach for employee by their EmployeeID',
      default: '*EmployeeID*',
    },
    {
        name: "roleID",
        type: "list",
        message: "Please select the employees new Role ID",
        choices: [
          "100",
          "101",
          "102",
          "200",
          "201",
          "202",
          "300",
          "301",
          "302"
        ]
    }
    ]).then(function(answer) {
    // console.log(answer);
    const query ="UPDATE employee SET role_id = ? WHERE employee_id = ?;"
    connection.query(query, [answer.roleID,answer.employeeID], function(err, data) {
        // console.log(data);
    })
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`${answer.employeeID}'s role has been updated!`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    runSearch();
    })
};


    