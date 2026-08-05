const mongoose = require('mongoose');
const W = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true }, subject: { type: String, required: true },
  theme: String, age: Number, pages: { type: Number, default: 20 },
  status: { type: String, enum: ['generating','ready','ordered'], default: 'generating' },
  price: { type: Number, default: 29 }
}, { timestamps: true });
module.exports = mongoose.model('Workbook', W);
