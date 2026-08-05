const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['tutor', 'marking', 'study'], required: true },
    question: String,
    answer: String,
    subject: String,
    confidence: Number,
    metadata: mongoose.Schema.Types.Mixed
}, { timestamps: true });

module.exports = mongoose.model('Session', SessionSchema);
