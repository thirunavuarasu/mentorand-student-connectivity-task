import express from 'express';
import { CreateStudent} from '../Controllers/student.controller.js';

const router = express.Router();

 router.post('/create/student',CreateStudent);



export default router;