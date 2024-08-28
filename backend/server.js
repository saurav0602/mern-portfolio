// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
//const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

// Define API Route
app.post('/api/contact', async (req, res) => {
  const { fullname, mobile, email, address, message } = req.body;

  try {
    const newContact = new Contact({
      fullname,
      mobile,
      email,
      address,
      message,
    });

    await newContact.save();
    res.status(200).json({ message: 'Message received' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save message', error });
  }
});

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// })
module.exports=app;