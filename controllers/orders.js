const Order = require('../models/Order');

module.exports = {
  getOrders: async (req, res, next) => {
    const isAdmin = req.user.isAdmin;
    let orders = [];

    if (isAdmin) orders = await Order.find({}).sort({ date: -1 });

    if (!isAdmin)
      orders = await Order.find({ user: req.user.id }).sort({ date: -1 });

    return res.json(orders);
  },

  createOrder: async (req, res, next) => {
    const { items, total, shippingAddress, paymentMethod } = req.body;
    const newOrder = new Order({
      items,
      total,
      shippingAddress,
      paymentMethod,
      user: req.user.id,
    });

    const order = await newOrder.save();

    return res.json(order);
  },
};
