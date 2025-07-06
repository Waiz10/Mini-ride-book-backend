const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    passenger_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    driver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    pickup_location: {
        type: String,
        required: true
    },
    drop_location: {
        type: String,
        required: true
    },
    ride_type: {
        type: String,
        enum: ['Bike', 'Car', 'Rickshaw'],
        required: true
    },
    status: {
        type: String,
        enum: ['Requested', 'Accepted', 'In Progress', 'Completed'],
        default: 'Requested'
    }
});

module.exports = mongoose.model('Ride', rideSchema);