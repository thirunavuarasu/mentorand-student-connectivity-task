import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.mongoDBconnectionstring)
        console.log("MongoDB connected successfully");
        return connection;
        
    }catch (error){
        console.log(error);
    }
}


export default connectDB;
