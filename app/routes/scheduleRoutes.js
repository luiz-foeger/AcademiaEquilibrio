const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.get('/dashboard', scheduleController.showDashboard);
router.post('/agendar', scheduleController.schedule);

module.exports = router;