const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '100kb' }));

const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB OK'))
    .catch(e => console.error('MongoDB error:', e.message));
} else {
  console.log('No MONGODB_URI — skipping DB');
}

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/materials', require('./routes/materials'));
app.use('/api/study', require('./routes/study'));
app.use('/api/tutor', require('./routes/tutor'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/workbooks', require('./routes/workbooks'));

app.get('/api/health', (req, res) => res.json({ status: 'ok', ts: Date.now() }));

app.use(express.static(path.join(__dirname, '..')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'index.html')));

app.use((err, req, res, next) => { console.error(err); res.status(500).json({ error: 'Server error' }); });
app.listen(PORT, '0.0.0.0', () => console.log(`LearnAI on ${PORT}`));
