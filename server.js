import  mongoose from "mongoose";
import express from 'express';
const app = express();
import studentrouter from "./router/student.js";
import authrouter from "./router/auth.js";
app.use(express.json())
app.use("/student", studentrouter);
app.use("/user", authrouter);
mongoose.connect("mongodb://127.0.0.1:27017/asm2").then(() =>{
    console.log("kết nối thành công đến db");
})
app.listen(4000,()=>{
    console.log(`Listening on port 4000`);
})