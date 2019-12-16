CREATE DATABASE jobs_db;

USE jobs_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  department_ID INT(10) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  salary DECIMAL(10,4) NULL,
  department_ID INT(10) NULL,
  role_ID INT(10) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  employee_ID INT(10) NOT NULL,
  role_ID INT(10) NOT NULL,
  manager_ID INT(10) NULL,
  PRIMARY KEY (id)
);


INSERT INTO department (name,department_ID) VALUES ('Direct',10);
INSERT INTO department (name,department_ID) VALUES ('Product',20);
INSERT INTO department (name,department_ID) VALUES ('Management',30);

INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('Consultant',50000.00,10,100);
INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('Account Manager',65000.00,10,101);
INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('Client Relationship',80000.00,10,102);

INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('QA Analyst',50000.00,20,200);
INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('Product Lead',70000.00,20,201);
INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('Systems Architect',100000.00,20,202);

INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('Direct Pod Lead',100000.00,30,300);
INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('Vice President',150000.00,30,301);
INSERT INTO role (title,salary,department_ID,role_ID) VALUES ('CEO',200000.00,30,302);


INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Joe','Bob',10000,100,11000);
INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('James','Doug',10001,100,11000);
INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Ethan','Allan',11000,101,12000);
INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Russell','Crow',12000,102,30000);

INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Leeroy','Jenkins',10002,200,11001);
INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Faker','Guy',10003,200,11001);
INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Jones','McJones',11001,201,12002);
INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Hoob','Tort',12002,202,30000);

INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Short','Stuff',10004,300,30000);
INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Test','Labor',10005,300,30000);
INSERT INTO employee (first_name,last_name,employee_id,role_ID,manager_ID) VALUES ('Elon','Mactusk',11002,301,30000);
INSERT INTO employee (first_name,last_name,employee_id,role_ID) VALUES ('Street','Goob',30000,302);

select * from employee

select * from role

select * from department




