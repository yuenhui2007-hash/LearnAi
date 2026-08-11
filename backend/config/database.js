/**
 * LearnAI Database Layer
 * Uses MongoDB when MONGODB_URI is set, falls back to in-memory Maps
 */

const mongoose = require('mongoose');

// In-memory fallback stores
const memStores = {
    users: new Map(),
    materials: new Map(),
    studyPlans: new Map(),
    sessions: new Map(),
    analytics: new Map(),
    workbooks: new Map(),
    activityLogs: new Map(),
    academyProgress: new Map(),
    certificates: new Map(),
    assignments: new Map()
};

// Seed demo user for in-memory mode
memStores.users.set('demo-user-1', {
    id: 'demo-user-1',
    email: 'demo@learnai.app',
    name: 'Demo Student',
    role: 'student',
    grade: 'Secondary 4',
    subjects: ['Mathematics', 'Economics', 'Physics'],
    interests: ['Dinosaurs', 'Space'],
    createdAt: new Date().toISOString()
});

// Mongoose Schemas
let User, ActivityLog;

function initMongo() {
    if (!process.env.MONGODB_URI) {
        console.log('[DB] Using in-memory database (set MONGODB_URI for MongoDB)');
        return false;
    }

    const userSchema = new mongoose.Schema({
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: 'student', enum: ['student', 'admin'] },
        grade: String,
        subjects: [String],
        interests: [String],
        createdAt: { type: Date, default: Date.now }
    });

    const activitySchema = new mongoose.Schema({
        userId: String,
        userName: String,
        userEmail: String,
        action: String,
        timestamp: { type: Date, default: Date.now },
        ip: String
    });

    User = mongoose.model('User', userSchema);
    ActivityLog = mongoose.model('ActivityLog', activitySchema);

    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('[DB] MongoDB connected'))
        .catch(err => {
            console.error('[DB] MongoDB connection failed, using in-memory:', err.message);
        });

    return true;
}

const isMongo = initMongo();

// Unified API: exports same interface whether Mongo or in-memory
module.exports = {
    isMongo,
    mongoose: isMongo ? mongoose : null,
    User: isMongo ? User : null,
    ActivityLog: isMongo ? ActivityLog : null,

    // In-memory stores (always available as fallback)
    users: memStores.users,
    materials: memStores.materials,
    studyPlans: memStores.studyPlans,
    sessions: memStores.sessions,
    analytics: memStores.analytics,
    workbooks: memStores.workbooks,
    activityLogs: memStores.activityLogs,
    academyProgress: memStores.academyProgress,
    certificates: memStores.certificates,
    assignments: memStores.assignments
};
