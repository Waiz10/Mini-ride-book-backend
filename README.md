# Mini Ride Booking Backend

## Overview
This project is a prototype for a lite version of a ride-hailing application designed for smaller cities. It focuses on backend logic and frontend flows to simulate booking rides between locations without real-time maps or GPS.

## Tech Stack
- **Node.js**: For building the backend server.
- **Express**: To handle routing and middleware.
- **MongoDB**: For storing user and ride data (assumed, can be replaced with any database).
- **Mongoose**: For object modeling and schema definition.

## Assumptions
- The application does not require real-time GPS tracking.
- User authentication is handled through basic authentication.
- The database is assumed to be MongoDB, but can be adapted to other databases as needed.

## Project Structure
```
mini-ride-booking-backend
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   ├── rideController.js
│   │   └── driverController.js
│   ├── models
│   │   ├── user.js
│   │   └── ride.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── rideRoutes.js
│   │   └── driverRoutes.js
│   ├── middleware
│   │   └── authMiddleware.js
│   └── app.js
├── package.json
├── README.md
└── .env
```

## Features
1. **User Registration/Login**: Users can register and log in to the system.
2. **Request a Ride**: Users can request a ride by entering pickup and drop-off locations and selecting a ride type.
3. **View Ride Status**: Users can check the status of their ride requests.
4. **View Ride History**: Users can view their past rides.
5. **Driver Operations**: Drivers can accept or reject ride requests.

## API Endpoints
### User Registration
- **Method**: POST
- **Endpoint**: `/api/auth/register`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "type": "passenger",
    "password": "password123"
  }
  ```

### User Login
- **Method**: POST
- **Endpoint**: `/api/auth/login`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "password": "password123"
  }
  ```

### Request a Ride
- **Method**: POST
- **Endpoint**: `/api/rides/request`
- **Body**:
  ```json
  {
    "pickup_location": "Mall Road",
    "drop_location": "Airport",
    "ride_type": "Car"
  }
  ```

### View Ride Status
- **Method**: GET
- **Endpoint**: `/api/rides/status/{rideId}`

### View Ride History
- **Method**: GET
- **Endpoint**: `/api/rides/history/{userId}`

### Driver Accepts Ride
- **Method**: POST
- **Endpoint**: `/api/drivers/accept`
- **Body**:
  ```json
  {
    "rideId": "123",
    "driverId": "456"
  }
  ```

## Testing with Postman
1. **Start the Server**: Run the command `node src/app.js` to start the server.
2. Use the provided API endpoints to test user registration, login, ride requests, and driver operations.

Make sure to replace `{rideId}` and `{userId}` with actual IDs from your database when testing.