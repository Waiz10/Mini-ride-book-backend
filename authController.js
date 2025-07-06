const User = require('../models/user');

exports.register = async (req, res) => {
    const { name, type, password } = req.body;

    try {
        const newUser = new User({ name, type, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

exports.login = async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Here you would typically generate a session token
        res.status(200).json({ message: 'Login successful', userId: user.id });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};