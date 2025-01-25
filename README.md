# About Apollonia Management System 
- In this project, you will step into the shoes of a backend developer at Apollonia Dental Practice, helping the team with developing a new employee management web application for the company.
- The team at Apollonia Dental Practice is trying to set the foundations to digitalize their employee management. In time, they'll want to be able to have digital records of their employees and departments, assign patients to each member of their medical staff, assign projects to each staff member, and more. To do this, they want to begin creating a basic CRUD web app, storing and managing information about their employees and departments, as a foundation to further develop the app upon in the future.
- They want you to develop a database and web app reflecting their current organization, staff members and departments. The team will use your development to begin creating a new digital employee management system in order to better manage their dental practice and its workforce. 


# Your Challenge

Your task will be to create a fundamental employee management CRUD web app to store information about employees and departments, and perform CRUD operations on the employee data, using Node.js and MongoDB. To do this, you will create a Node.js server and MongoDB database, create employees and departments collections, and let users perform CRUD operations on the database via first REST API and secondly graphQl.

# Objectives of the System
Create a database with employees and departments
Create a web UI for employees and departments management
Perform CRUD (Create, Read, Update, Delete) operations on the employees and departments database using the web UI

///To Digitize Clinical 
# Features
* Records of Hospital:
* Employees and departments,
* Assign patients to each member of their medical staff,
* Assign projects to each staff member, and more.

# System Design:
* Create a database with employees(medical staff) and departments(clinical departments) [Database]
* Create a web UI for employees and departments management [Web UI]
* Perform CRUD (Create, Read, Update, Delete) operations on the employees and departments database using the web UI. [API]

# Database Design:
1. Employee Collection:
 - Name [type: string]
 - Surname [type: string]
 - Department [type: string]
 - Email [type: string]

2. Departments Collection:
 - General Dentistry [type: string]
 - Pediatric Dentistry [type: string]
 - Restorative Dentistry [type: string]
 - Surgery [type: string]
 - Orthodontics [type: string]


# API Design (<CREATE><READ><UPDATE><DELETE>):
# Basic API Endpoints
* Departments API
1.GET /departments - Get all departments
2.GET /department/:id - Get a department
3.POST /department - Create a new department

* Employees API
4.GET /employees - Get all employees
5.POST /employees or POST /signup - Add a new employee (for Admins only) or register a new employee
6.GET /employees/:id - Get employee by ID
7.PUT /employees/:id - Update employee details
8.DELETE /employees/:id - Delete an employee

# Technologies & Frameworks:
* Nodejs v.20+
* ExpressJS v.4
* MongoDB v.8 ( Mongoose )
* REST API
* GRAPHQL 
* Docker
* Swagger
* Github Actions

