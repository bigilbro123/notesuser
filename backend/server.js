import express from "express"
import { connectDB } from "./DB/DB.js";
import cors from 'cors';
import userRouters from "./routes/userRoute.js";
import dotenv from "dotenv";
import Noteroute from "./routes/NoteRotes.js";

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())





app.get("/", (req, res) => {
    res.send("hello")
})
app.use("/api", userRouters)
app.use("/api/notes",Noteroute)


app.listen(process.env.PORT || 8000, () => {
    connectDB()
    console.log(`server start ${process.env.PORT || 8000}`)
})