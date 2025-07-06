const Ride = require('../models/ride');
const User = require('../models/user');

// Accept a ride request
exports.acceptRide = async (req, res) => {
    const { rideId, driverId } = req.body;

    try {
        const ride = await Ride.findById(rideId);
        if (!ride) {
            return res.status(404).json({ message: 'Ride not found' });
        }

        if (ride.status !== 'Requested') {
            return res.status(400).json({ message: 'Ride cannot be accepted' });
        }

        ride.driver_id = driverId;
        ride.status = 'Accepted';
        await ride.save();

        res.status(200).json({ message: 'Ride accepted successfully', ride });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Reject a ride request
exports.rejectRide = async (req, res) => {
    const { rideId } = req.body;

    try {
        const ride = await Ride.findById(rideId);
        if (!ride) {
            return res.status(404).json({ message: 'Ride not found' });
        }

        if (ride.status !== 'Requested') {
            return res.status(400).json({ message: 'Ride cannot be rejected' });
        }

        ride.status = 'Rejected';
        await ride.save();

        res.status(200).json({ message: 'Ride rejected successfully', ride });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};