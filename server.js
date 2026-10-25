require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB se successfully connect ho gaya!"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Basic Route
app.get('/', (req, res) => {
    res.send("Hello Balajee! Backend aur Database chal rahe hain.");
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});