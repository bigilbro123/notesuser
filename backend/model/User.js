import mongoose from "mongoose";
const usershema = new mongoose.Schema({

    userName: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        minlength: 6
    }
}, {
    timestamps: true
})
const User = mongoose.model("User", usershema);

export default  User