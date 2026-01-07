const Campaign = require('../models/Campaign');
const EmailLog = require('../models/EmailLog');
const smtpService = require('../services/smtpService');

class EmailController {
  async sendBulk(req, res) {
    try {
      const { campaignId, emails, subject, html } = req.body;
      
      const results = await smtpService.sendBulk(emails, subject, html);
      
      await Campaign.updateOne({ _id: campaignId }, {
        sentCount: results.filter(r => r.success).length,
        failedCount: results.filter(r => !r.success).length
      });
      
      res.json({ success: true, results });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async getStatus(req, res) {
    try {
      const campaign = await Campaign.findById(req.params.id);
      res.json({ success: true, campaign });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async getLogs(req, res) {
    try {
      const logs = await EmailLog.find({ campaignId: req.params.id });
      res.json({ success: true, logs });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

module.exports = new EmailController();
