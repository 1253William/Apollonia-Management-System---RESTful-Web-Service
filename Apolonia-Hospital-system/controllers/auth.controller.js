const User = require('../models/employee.model');
const Department = require('../models/department.model');

// Controller for Registering an employee
// POST /api/signup
exports.registerEmployee = async (req, res) => {
  try {
        const { firstName, lastName, department, email } = req.body;
        
        //Validation
        if (!firstName || !lastName || !department || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
      
      const departmentData = await Department.findOne({ name: department });
      if (!departmentData) {
          return res.status(404).json({ message: "Department not found" });
      }

        const newEmployee =  new User({
            email,
            firstName,
            lastName,
            department: departmentData._id,
        })

        await newEmployee.save();

        if (newEmployee) {
            return res.status(201).json({
                success: true,
                message: "Sign up successful",
                newEmployee
            })
        }

    } catch (error) {
        console.error("Error registering employee:", error.message);
        return res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
}

// Controller for  logging in  an employee
// POST /api/login
exports.loginEmployee = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required to log in " });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        if (user) {
            return res.status(200).json({
                success: true,
                message: "Login successful",
                user
            })
        }


     } catch (error) {
        console.error("Error logging in employee:", error.message);
        return res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
}