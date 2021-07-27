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
    },
    nameFirst: {
        type: String,
        required: true
    },
    nameLast: {
        type: String,
        required: true
    },
    permission: {
        type: String,
        required: true
    }
}, { collection: "users-auth"});

export default mongoose.model('User', userSchema);