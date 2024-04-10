import express from 'express';
import {create,getall,delete_student,update,getbyid} from '../controllers/student.js';
const studentRouter = express.Router();
studentRouter.post('/', create);
studentRouter.get('/', getall);
studentRouter.delete('/:id', delete_student);
studentRouter.put('/:id', update);
studentRouter.get('/:id', getbyid);


export default studentRouter;