const express = require('express');
const router = express.Router();

const calculator_controller = require('../controllers/calculator');

router.get('/', calculator_controller.home);
router.get('/calculate/:amount', calculator_controller.calculate_interest);

module.exports = router;