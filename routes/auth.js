const express = require('express');
const router = express.Router();
const { isAuth } = require('../lib/authMiddleware');
const { loginUser } = require('../controllers/auth');

/**
 * @route   GET /api/auth
 * @desc    Get the logged in user
 * @access  Private
 */
router.get('/', isAuth, (req, res) => res.json(req.user));

/**
 * @route   POST /api/auth
 * @desc    Login the user
 * @access  Public
 */
router.post('/', loginUser);

/**
 * @route   GET /api/auth/logout
 * @desc    Logout the user
 * @access  Private
 */
router.get('/logout', isAuth, (req, res) => {
  req.logout();
  return res.json({ msg: 'Logged out successfuly!' });
});

module.exports = router;
