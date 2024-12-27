const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { db, auth } = require('./firebaseConfig');
const Razorpay = require('razorpay');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Payment Route
app.post('/api/payments/order', async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100, //Amount in paise (e.g., ₹1 = 100 paise)
      currency: 'INR',
      receipt: 'receipt_order_123',
    };   
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send('Error creating Razorpay order');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
