import express from "express"
const app = express()
import { ENV } from "./config/ENV.config.js"














app.listen(ENV.PORT,()=> console.log("running on port",ENV.PORT))