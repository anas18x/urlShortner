import mongoose from "mongoose";
import { ENV } from "./config/ENV.config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("DB connected");
    } catch (error) {
        console.log("DB connectio error");
        process.exit(1);
    }
}

export default await connectDB()