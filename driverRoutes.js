const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

// Route for driver accepting a ride
router.post('/accept', driverController.acceptRide);

// Route for driver rejecting a ride
router.post('/reject', driverController.rejectRide);

module.exports = router;