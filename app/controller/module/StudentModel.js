const { Schema, model } = require("mongoose");
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
})
const StudentModel = model("student", studentSchema);
module.exports = StudentModel