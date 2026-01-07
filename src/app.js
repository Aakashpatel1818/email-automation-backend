const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(express.json({ limit: '10mb' }));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// Routes
app.use('/api/v1/emails', require('./routes/emailRoutes'));
app.use('/api/v1/campaigns', require('./routes/campaignRoutes'));

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, error: err.message });
});

module.exports = app;
