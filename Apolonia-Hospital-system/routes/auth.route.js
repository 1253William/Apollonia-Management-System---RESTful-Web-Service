const express = require('express');
const router = express.Router();
const { registerEmployee } = require('../controllers/auth.controller')

//@description  Register an employee
//@route    /api/signup
//@access public
router.post('/signup', registerEmployee);


module.exports = router;