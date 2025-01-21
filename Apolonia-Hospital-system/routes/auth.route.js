const express = require('express');
const router = express.Router();
const { registerEmployee, loginEmployee} = require('../controllers/auth.controller')

//@description  Register an employee
//@route    /api/signup
//@access public
router.post('/signup', registerEmployee);

//@description  Log in 
//@route    /api/login 
//@access public
router.post('/login', loginEmployee);


module.exports = router;