const express = require('express');
const router = express.Router();
const { addDepartment,
    getDepartment,
    getAllDepartments
} = require('../controllers/department.controller');

//Create a department
//@route /api/department
router.post('/department', addDepartment); 

//Get a departments
//@route /api/department/:id
router.get('/department/:id', getDepartment); 

//Get all departments
//@route /api/department
router.get('/departments', getAllDepartments); 

module.exports = router;