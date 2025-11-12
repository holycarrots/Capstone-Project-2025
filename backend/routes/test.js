const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Test route to check user credentials
router.post('/test-auth', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Test auth request:', { email });

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.json({ 
                success: false, 
                message: 'User not found',
                step: 'user_search' 
            });
        }

        // Test password
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log('Password comparison result:', passwordMatch);

        return res.json({
            success: true,
            userExists: true,
            passwordMatch,
            hashedPassword: user.password,
            step: 'password_check'
        });

    } catch (error) {
        console.error('Test auth error:', error);
        return res.status(500).json({ 
            success: false, 
            message: error.message,
            step: 'error'
        });
    }
});

module.exports = router;