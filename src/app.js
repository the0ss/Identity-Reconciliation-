import contactRouter from "./routes/contact.routes.js"
import express from "express"

const app = express()

app.use(express.json())
app.use("/identify",contactRouter)

export {app}