import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/DbConfig.js';
import studentRoutes from './Routers/student.router.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send("App is working fine");
  });
  app.use('/api/students', studentRoutes);

  connectDB();

  app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
  });