import express from "express"
const app = express()
import { ENV } from "./config/ENV.config.js"
import urlRouter from "./routes/url.routes.js"
import _ from "./dbConnection.js"
import cors from "cors"

app.use(express.json())
app.use(cors())
app.use("/",urlRouter)


app.listen(ENV.PORT,()=> console.log("running on port",ENV.PORT))