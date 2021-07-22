import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2
    },
    password: {
        type: String,
        required: true,
        min: 2
    }
}, { collection: "users-auth"});

export default mongoose.model('User', userSchema);