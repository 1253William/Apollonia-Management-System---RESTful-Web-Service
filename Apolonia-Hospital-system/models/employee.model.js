const mongoose = require('mongoose');

//Employee Schema
const employeeSchema = new mongoose.Schema(
    {
        firstName: {
            type: 'String',
            required: true,
            default: 'First Name'
        },
        lastName: {
            type: 'String',
            required: true,
            default: 'Last Name'
        },
        department: {
            type: mongoose.Schema.Types.ObjectId, ref:'Department',
        },
    }
)

module.exports = mongoose.model('Employee', employeeSchema);