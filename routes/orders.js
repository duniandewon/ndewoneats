const express = require('express');
const router = express.Router();
const { isAuth } = require('../lib/authMiddleware');
const { asyncErrorHandler } = require('../lib/errorHandlers');
const { getOrders, createOrder } = require('../controllers/orders');

/**
 * @route   GET /api/orders
 * @desc    Get All orders
 * @access  Private
 */
router.get('/', isAuth, asyncErrorHandler(getOrders));

/**
 * @route   POST /api/orders
 * @desc    Create an order
 * @access  Private
 */
router.post('/', isAuth, asyncErrorHandler(createOrder));

module.exports = router;
