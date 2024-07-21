import mongoose from "mongoose";


const StudentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    position: String,

})

const Students = mongoose.model('Student', StudentSchema)

export default Students;