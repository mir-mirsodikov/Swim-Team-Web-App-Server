import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { collection: "announcements"});

export default mongoose.model('Announcement', announcementSchema);