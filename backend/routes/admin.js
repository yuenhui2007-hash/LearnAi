const express = require('express');
const { users, activityLogs, academyProgress } = require('../config/database');
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

module.exports = router;
