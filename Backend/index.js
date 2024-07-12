const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Serve static files from the "Frontend" directory
app.use(express.static('Frontend'));

// Define Routes
app.use('/api/auth', require('./Routes/login'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
