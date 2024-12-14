import mongoose from "mongoose";
const noteshema = new mongoose.Schema({

    Note: {
        type: String,
        require: true,

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})
const Notes = mongoose.model("Notes", noteshema);

export default Notes