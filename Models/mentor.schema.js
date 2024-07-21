import mongoose from "mongoose"; 


const mentorSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    StudentId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
    })
       

const mentor=mongoose.model('mentor',mentorSchema);

export default mentor;