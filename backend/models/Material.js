const mongoose = require('mongoose');
const M = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['textbook','notes','worksheet','past_paper','syllabus'], required: true },
  subject: { type: String, required: true }, level: String, title: { type: String, required: true },
  content: String, fileUrl: String, concepts: [String], topics: [String]
}, { timestamps: true });
module.exports = mongoose.model('Material', M);
