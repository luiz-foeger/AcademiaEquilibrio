const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

router.get('/dashboard', agendaController.showDashboard);
router.post('/agendar', agendaController.agenda);

module.exports = router;