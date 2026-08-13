const express = require('express');
const { users, activityLogs, academyProgress, assignments } = require('../config/database');
const router = express.Router();

// GET /api/admin/users
router.get('/users', (req, res) => {
    const allUsers = Array.from(users.values()).map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        subscription: u.subscription || 'free',
        role: u.role || 'student',
        createdAt: u.createdAt
    }));
    res.json({ success: true, count: allUsers.length, users: allUsers });
});

// GET /api/admin/progress
router.get('/progress', (req, res) => {
    res.json({ success: true, count: 0, progress: [] });
});

// GET /api/admin/academy-progress
router.get('/academy-progress', (req, res) => {
    const allProgress = Array.from(academyProgress.values()).map(p => {
        const user = users.get(p.userId);
        return {
            userId: p.userId,
            userName: user ? user.name : 'Unknown',
            userEmail: user ? user.email : 'Unknown',
            level: p.level || 0,
            levelName: p.levelName || 'Not started',
            completedModules: p.completedModules || [],
            quizScores: p.quizScores || {},
            totalScore: p.totalScore || 0,
            lastActive: p.lastActive || '-',
            completedAll: p.completedAll || false
        };
    });
    res.json({ success: true, count: allProgress.length, academyProgress: allProgress });
});

// GET /api/admin/activity-logs
router.get('/activity-logs', (req, res) => {
    const logs = Array.from(activityLogs.values())
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .map(log => ({
            userId: log.userId,
            userName: log.userName || 'Unknown',
            userEmail: log.userEmail || 'Unknown',
            action: log.action,
            timestamp: log.timestamp,
            ip: log.ip || '-'
        }));
    res.json({ success: true, count: logs.length, logs });
});

// GET /api/admin/stats
router.get('/stats', (req, res) => {
    const allUsers = Array.from(users.values());
    const allLogs = Array.from(activityLogs.values());
    const today = new Date().toISOString().split('T')[0];

    const todayLogins = allLogs.filter(l =>
        l.action === 'login' && l.timestamp.startsWith(today)
    ).length;

    const todayRegistrations = allLogs.filter(l =>
        l.action === 'register' && l.timestamp.startsWith(today)
    ).length;

    res.json({
        success: true,
        stats: {
            totalUsers: allUsers.length,
            totalLogins: allLogs.filter(l => l.action === 'login').length,
            totalLogouts: allLogs.filter(l => l.action === 'logout').length,
            todayLogins,
            todayRegistrations,
            activeNow: allLogs.filter(l => l.action === 'login').length -
                       allLogs.filter(l => l.action === 'logout').length
        }
    });
});

// ===== Assignment Submission (Employee) =====

// POST /api/admin/assignments/submit
router.post('/assignments/submit', (req, res) => {
    const { userId, dept, moduleIndex, moduleTitle, assignmentTitle, content } = req.body;
    if (!userId || !dept || content === undefined) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }
    const id = `${userId}_${dept}_${moduleIndex}`;
    assignments.set(id, {
        id,
        userId,
        dept,
        moduleIndex,
        moduleTitle: moduleTitle || '',
        assignmentTitle: assignmentTitle || '',
        content,
        wordCount: content.split(/\s+/).filter(w => w.length > 0).length,
        status: 'pending',
        submittedAt: new Date().toISOString()
    });
    res.json({ success: true, assignment: assignments.get(id) });
});

// GET /api/admin/assignments/status/:userId/:dept
router.get('/assignments/status/:userId/:dept', (req, res) => {
    const { userId, dept } = req.params;
    const userAssignments = Array.from(assignments.values())
        .filter(a => a.userId === userId && a.dept === dept)
        .map(a => ({
            moduleIndex: a.moduleIndex,
            status: a.status,
            score: a.score,
            feedback: a.feedback,
            submittedAt: a.submittedAt,
            gradedAt: a.gradedAt
        }));
    res.json({ success: true, assignments: userAssignments });
});

// ===== Assignment Grading (Admin) =====

// GET /api/admin/assignments
router.get('/assignments', (req, res) => {
    const all = Array.from(assignments.values()).map(a => {
        const user = users.get(a.userId);
        return {
            id: a.id,
            userId: a.userId,
            userName: user ? user.name : 'Unknown',
            userEmail: user ? user.email : 'Unknown',
            dept: a.dept,
            moduleIndex: a.moduleIndex,
            moduleTitle: a.moduleTitle,
            assignmentTitle: a.assignmentTitle,
            content: a.content,
            wordCount: a.wordCount,
            status: a.status || 'pending',
            score: a.score,
            feedback: a.feedback,
            gradedBy: a.gradedBy,
            submittedAt: a.submittedAt,
            gradedAt: a.gradedAt
        };
    }).sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
    res.json({ success: true, count: all.length, assignments: all });
});

// POST /api/admin/assignments/:id/grade
router.post('/assignments/:id/grade', (req, res) => {
    const { score, feedback } = req.body;
    const a = assignments.get(req.params.id);
    if (!a) return res.status(404).json({ success: false, error: 'Assignment not found' });
    a.status = 'graded';
    a.score = score;
    a.feedback = feedback;
    a.gradedAt = new Date().toISOString();
    res.json({ success: true, assignment: a });
});

module.exports = router;
