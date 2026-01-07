const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');

router.post('/', campaignController.create.bind(campaignController));
router.get('/', campaignController.getAll.bind(campaignController));
router.get('/:id', campaignController.getById.bind(campaignController));
router.put('/:id', campaignController.update.bind(campaignController));
router.delete('/:id', campaignController.delete.bind(campaignController));

module.exports = router;
