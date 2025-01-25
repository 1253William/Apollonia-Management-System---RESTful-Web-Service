const User = require('../models/employee.model');


// Controller for Getting all employees
//GET /api/employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await User.find().populate('departments');
        if (!employees) {
            return res.status(404).json({ message: "No employees found" });
        }
        return res.status(200).json({
            success: true,
            totalEmployees: employees.length,
            data:  employees
        });
    } catch (error) {
        console.error("Error getting employees:", error.message);
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
}


//Controller for Getting an employee record by ID
//GET /api/employee/:id
exports.getEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const employee = await User.findById(employeeId).populate('departments');

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(
            {
            success: true,
            data: employee
        });
    } catch (error) {
        console.error("Error getting employee:", error.message);
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
}

//Controller for updating employee record by ID
//PUT /api/employees/:id
exports.updateEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const updateData = req.body;

        if (!updateData) {
            return res.status(400).json({ message: "No data to update" });
        }

        const employee = await User.findByIdAndUpdate(
            employeeId,
            updateData, 
            {
                new: true,  
                runValidators: true
            }).populate('departments');

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(
            {
                success: true,
                message: "Employee updated successfully",
                data: employee
            });
    } catch (error) {
        console.error("Error updating employee:", error.message);
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
}