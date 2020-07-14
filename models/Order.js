const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  items: [
    {
      type: Object,
    },
  ],
  total: {
    type: String,
  },
  shippingAddress: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('order', OrderSchema);
