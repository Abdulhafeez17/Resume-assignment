import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const ResumeSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', userSchema);
export const Resume = mongoose.model('Resume', ResumeSchema);
