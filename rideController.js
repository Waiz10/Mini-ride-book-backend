const Ride = require('../models/ride');
const User = require('../models/user');

// Request a ride
exports.requestRide = async (req, res) => {
    // Accept passenger_id from body for testing
    const { pickup_location, drop_location, ride_type, passenger_id } = req.body;

    try {
        const newRide = new Ride({
            passenger_id,
            pickup_location,
            drop_location,
            ride_type,
            status: 'Requested'
        });

        await newRide.save();
        res.status(201).json({ message: 'Ride requested successfully', ride: newRide });
    } catch (error) {
        res.status(500).json({ message: 'Error requesting ride', error });
    }
};

// View ride status
exports.viewRideStatus = async (req, res) => {
    const { rideId } = req.params;

    try {
        const ride = await Ride.findById(rideId);
        if (!ride) {
            return res.status(404).json({ message: 'Ride not found' });
        }
        res.status(200).json({ ride });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ride status', error });
    }
};

// View ride history
exports.viewRideHistory = async (req, res) => {
    const userId = req.params.userId;

    try {
        const rides = await Ride.find({ passenger_id: userId });
        res.status(200).json({ rides });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ride history', error });
    }
};