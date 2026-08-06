/**
 * LearnAI — In-Memory Database (production: swap for MongoDB/PostgreSQL)
 */

const users = new Map();
const materials = new Map();
const studyPlans = new Map();
const sessions = new Map();
const analytics = new Map();
const workbooks = new Map();
const activityLogs = new Map();
const academyProgress = new Map();

// Seed demo user
users.set('demo-user-1', {
    id: 'demo-user-1',
    email: 'demo@learnai.app',
    name: 'Demo Student',
    role: 'student',
    grade: 'Secondary 4',
    subjects: ['Mathematics', 'Economics', 'Physics'],
    interests: ['Dinosaurs', 'Space'],
    createdAt: new Date().toISOString()
});

module.exports = { users, materials, studyPlans, sessions, analytics, workbooks, activityLogs, academyProgress };
