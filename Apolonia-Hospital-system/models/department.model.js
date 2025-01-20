const mongoose = require('mongoose');

//Department Schema
const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId, ref:'Employee',
    }],  
})

module.exports = mongoose.model('Department', departmentSchema);