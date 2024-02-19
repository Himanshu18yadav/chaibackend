import mongoose from "mongoose";
import{db_name}from "./constant.js";

import 'dotenv/config'

import dbconnect from"./db/index.js";
import { app } from "./app.js";
dbconnect()
.then(()=>{
    app.listen(process.env.PORT||4000,()=>{
        console.log (`server is listening at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongodb failed",err);
})