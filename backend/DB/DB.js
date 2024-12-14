import mongoose from 'mongoose';
import dototenv from 'dotenv';
dototenv.config()

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
            .then(() => console.log('Connected!'));

    } catch (error) {
        console.log(error);

    }
}