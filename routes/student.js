import express from "express"
import { getAllStudent,deleteStudent, getStudent, createStudent, updateStudent } from '../controller/student.js';

const router = express.Router();

router.get("/",getAllStudent)

router.get("/:id", getStudent)

router.put("/:id", updateStudent)

router.post("/",createStudent)

router.delete("/:id", deleteStudent)


export default router