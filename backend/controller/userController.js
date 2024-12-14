import Notes from "../model/Notes.js"
import User from "../model/User.js"

export const UserSignup = async (req, res) => {
    try {

        const { userName, email, password } = req.body

        const existuser = await User.findOne({ email })

        if (existuser) {
            return res.status(400).json({ message: `user with this ${email} is exist` })
        }
        if (password < 6) {
            return res.status(400).json({ message: "password is too short" })

        }

        const newuser = await User.create({
            userName,
            email,
            password
        })

        res.status(200).json({ message: "ok", newuser })




    } catch (error) {



        res.status(500).json({
            message: "internal server error"
        })

    }
}


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const existuser = await User.findOne({ email })
        console.log(email);

        if (existuser) {
            if (password == existuser.password) {
                return res.status(200).json({
                    message: "user login success", user: existuser
                })
            } else {
                return res.status(400).json({
                    message: "password not match",
                })
            }
        }

    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })

    }
}


export const UserNotes = async (req, res) => {
    try {
        const { Note, userId } = req.body
        console.log(Note, userId);

        if (!userId) {
            return res.status(400).json({
                message: "user not found"
            })
        }
        if (!Note) {
            return res.status(400).json({
                message: "user not found"
            })

        }
        await Notes.create({
            Note,
            userId
        })

        return res.status(201).json({
            message: "Note Created"
        })


    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }

}


export const GetUserNotes = async (req, res) => {
    try {
        const { userId } = req.body

        if (!userId) {
            return res.status(400).json({
                message: "user not found"
            })
        }

        const AllNotes = await Notes.find({
            userId
        })

        return res.status(201).json({
            message: "Note found", AllNotes
        })


    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }

}
