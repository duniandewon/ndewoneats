const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  inCart: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('product', ProductSchema);
