const Department = require('../models/department.model');


// Controller for adding a new department
// POST /api/department
exports.addDepartment = async (req, res) => {
    try {
        const { name } = req.body;

        //Validation
        if (!name) {
            return res.status(400).json({ message: "Name of the department is required" });
        }

        const existingDepartment = await Department.findOne({ name: name });
        if (existingDepartment) {
            return res.status(400).json({ message: "Department already exists" });
        }

        const newDepartment = new Department({ name });
        await newDepartment.save();

        if (newDepartment) { 
            return res.status(201).json({
                success: true,
                message: "Department added successfully",
                newDepartment
            });
        }

    } catch (error) {
          console.error("Error adding department:", error.message);
        return res.status(500).json({ success: false, message: error.message || "Internal server error" });
   }
}

// Controller for fetching a department
// GET /api/department/:id
exports.getDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);

        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }

        return res.status(200).json({
            success: true,
            department
        });
    } catch (error) {
        console.error("Error fetching department:", error.message);
        return res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
    
}

// Controller for fetching all departments
// GET /api/departments
exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();

        if (!departments) {
            return res.status(404).json({ message: "No departments found" });
        }

        return res.status(200).json({
            success: true,
            departments
        });

    } catch (error) {
        console.error("Error fetching all departments:", error.message);
        return res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
}