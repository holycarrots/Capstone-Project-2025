const bcrypt = require("bcrypt")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.signup = async (req, res) => {
  try {
    console.log("Received signup request with body:", { ...req.body, password: '[HIDDEN]' });
    const {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      udid,
    } = req.body

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !mobileNumber) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the user
    console.log('Creating user with data:', {
      firstName,
      lastName,
      email,
      mobileNumber,
      udid: udid || "",
    });
    
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobileNumber,
      udid: udid || "",
      image: `https://api.dicebear.com/7.x/initials/svg?seed=${firstName}&backgroundType=gradientLinear&fontFamily=Arial&fontSize=56&chars=1`
    })
    
    console.log('User created successfully:', user._id);

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user
    })
  } catch (error) {
    console.error('Signup error:', error);
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already registered. Please use a different email.",
      });
    }
    return res.status(500).json({
      success: false,
      message: error.message || "User cannot be registered. Please try again.",
    });
  }
}


// `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,

// `https://api.dicebear.com/7.x/initials/svg?seed=${firstName}&backgroundType=solid,gradientLinear&chars=1&fontWeight=500`





exports.login = async (req, res) => {
  try {
    console.log('Login attempt:', { email: req.body.email });
    const { email, password } = req.body;

    if (!email || !password) {
      console.log('Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields',
      });
    }

    console.log('Looking for user with email:', email);
    const user = await User.findOne({ email });



    if (!user) {

      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      })
    }

    // Compare Password and Generate JWT token
    try {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Password validation:', { isPasswordValid });
      
      if (isPasswordValid) {
        const token = jwt.sign(
          { email: user.email, id: user._id },
          process.env.JWT_SECRET || 'your-secret-key'
        );

        // Remove sensitive data before sending
        const userResponse = {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          image: user.image
        };

        res.status(200).json({
          success: true,
          token,
          user: userResponse,
          message: 'Login successful'
        });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Invalid password'
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Login failed. Please try again.'
    });
  }
} catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    })
  }
}



