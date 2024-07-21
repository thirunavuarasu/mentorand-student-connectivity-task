import Students from "../Models/student.schema.js";


export const createStudent = async (req, res) => {
 
    try {
    const Student = new Students(req.body);//document creation

    await Student.save();//document save

    res.status(200).json({message:"student created",data:Student});

  } catch (error) {

    console.log(error);

  }
}; 