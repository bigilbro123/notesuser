import express from "express"
import { Login, UserSignup } from "../controller/userController.js"

const route = express.Router()


route.post("/signup", UserSignup).post("/login", Login)


export default route