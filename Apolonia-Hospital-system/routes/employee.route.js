const express = require('express');
const router = express.Router();
const {
    getAllEmployees,
    getEmployee,
    updateEmployee
} = require('../controllers/employee.controller');

//description Get all employees
//@route GET  /api/employees
router.get('/employees', getAllEmployees);

//description Get an employee
//@route  GET  /api/employees/:id
router.get('/employees/:id', getEmployee);

//description Update a employee's record
//@route PUT  /api/employee/:id
router.put('/employees/:id', updateEmployee);

module.exports = router;
