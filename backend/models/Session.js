const mongoose = require('mongoose');
const S = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['tutor','marking','study'], required: true },
  question: String, answer: String, subject: String, confidence: Number
}, { timestamps: true });
module.exports = mongoose.model('Session', S);
