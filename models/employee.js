const mongoose = require("mongoose");

const EmployeeModel = mongoose.Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    org_name: {
        type: String
    },
    employee_id: {
        type: String // Might need to be an integer
    },
    phone_number_mobile: {
        type: String
    },
    email: {
        type: String
    },
    photo: {
        type: String
    }
});

module.exports = mongoose.model("Employee", EmployeeModel);