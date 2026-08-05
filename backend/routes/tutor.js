const express = require('express');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.post('/ask', authenticate, (req, res) => {
    const { question, subject, level = 'high school' } = req.body;
    res.json({
        answer: `Here's a ${level}-level explanation for ${subject || 'your question'}: ${question}`,
        relatedTopics: ['Topic A', 'Topic B', 'Topic C'],
        suggestedPractice: 'Try 3 practice questions on this topic',
        confidence: 0.94
    });
});

router.post('/mark', authenticate, (req, res) => {
    const { content, subject } = req.body;
    res.json({
        score: 18, total: 25, grade: 'B+',
        feedback: 'Strong knowledge but needs more evaluation.',
        breakdown: { knowledge: 5, application: 4, analysis: 5, evaluation: 4 },
        suggestions: ['Include stronger evaluation', 'Add real-world examples']
    });
});

module.exports = router;
