const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/users');
const { asyncErrorHandler } = require('../lib/errorHandlers');

/**
 * @route   POST /api/users
 * @desc    Register user
 * @access  Public
 */
router.post('/', asyncErrorHandler(registerUser));

module.exports = router;
