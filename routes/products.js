const express = require('express');
const router = express.Router();
const { isAdmin } = require('../lib/authMiddleware');

/**
 * @route   GET /api/products
 * @desc    Get All products
 * @access  Private: admin
 */
router.get('/', isAdmin, (req, res, next) => res.json({ msg: 'hello admin' }));

module.exports = router;
