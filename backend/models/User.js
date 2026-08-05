const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String }, name: { type: String, required: true }, phone: String,
  role: { type: String, enum: ['student','parent','teacher','admin'], default: 'student' },
  grade: String, subjects: [String], interests: [String],
  oauthProvider: { type: String, enum: ['local','google','apple'] }, oauthId: String, avatar: String,
  isActive: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);
