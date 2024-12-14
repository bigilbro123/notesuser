import express from "express"
import { GetUserNotes, UserNotes } from "../controller/userController.js"

const route = express.Router()

route.post('/create', UserNotes).post('/getnotes', GetUserNotes)


export default route