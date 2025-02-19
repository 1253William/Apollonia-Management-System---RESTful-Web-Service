const mongoose = require('mongoose');

//Employee Schema
const employeeSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            default: 'First Name'
        },
        lastName: {
            type: String,
            required: true,
            default: 'Last Name'
        },
       departments: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Department',
            required: true,
        }],
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model('Employee', employeeSchema);