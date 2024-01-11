import mongoose from "mongoose";
import {db_name} from"../constant.js";

const dbconnect=async()=>{
    try {
        const instances=await mongoose.connect(`${process.env.DATABASE_URI}/${db_name}`)
        console.log(`\n mongodb connected db host:${instances.connection.host}`)
        
    } catch (error) {
        console.log("IT'S SAD mongodb connection failed",error);
        process.exit(1)
        
    }

}
export default dbconnect;
