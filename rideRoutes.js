const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

// Request a ride
router.post('/request', rideController.requestRide);

// View ride status
router.get('/status/:rideId', rideController.viewRideStatus);

// View ride history
router.get('/history/:userId', rideController.viewRideHistory);

module.exports = router;