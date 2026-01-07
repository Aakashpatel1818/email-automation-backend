const Campaign = require('../models/Campaign');

class CampaignController {
  async create(req, res) {
    try {
      const campaign = new Campaign(req.body);
      await campaign.save();
      res.json({ success: true, campaign });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const campaigns = await Campaign.find();
      res.json({ success: true, campaigns });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const campaign = await Campaign.findById(req.params.id);
      res.json({ success: true, campaign });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const campaign = await Campaign.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json({ success: true, campaign });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await Campaign.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: 'Deleted' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

module.exports = new CampaignController();
