const mongoose = require('mongoose');

const StudyPlanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    examDate: Date,
    subjects: [String],
    hoursPerDay: Number,
    daysUntil: Number,
    phases: [{
        week: String,
        focus: String,
        priority: String
    }],
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('StudyPlan', StudyPlanSchema);
