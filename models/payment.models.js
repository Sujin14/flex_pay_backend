const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: Number, // Amount in INR
  paymentId: String,
  orderId: String,
  signature: String,
  email: String,
  contact: String,
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Upload' }, // Link to Upload
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);
