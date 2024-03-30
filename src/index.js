import dotenv from "dotenv"
import { connectDB } from "./db/index.js";
import contactRouter from "./routes/contact.routes.js"
import {app} from "./app.js"

dotenv.config({
  path:'./env'
})

connectDB()

app.use("/identify",contactRouter)

app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})