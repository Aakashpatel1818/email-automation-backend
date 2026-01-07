const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/send-bulk', emailController.sendBulk.bind(emailController));
router.get('/campaign/:id/status', emailController.getStatus.bind(emailController));
router.get('/campaign/:id/logs', emailController.getLogs.bind(emailController));

module.exports = router;
