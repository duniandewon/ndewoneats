const User = require('../models/User');
const passport = require('passport');
const { validPassword, genPassword } = require('../lib/passwordUtils');

module.exports = {
  loginUser: async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(400).json({ msg: 'Wrong username or password' });
      }

      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }

        console.log(req.session);
        return res.json(user);
      });
    })(req, res, next);
  },

  updatePassword: async (req, res) => {
    const { old_password, new_password } = req.body;
    const { email, hash, salt } = req.user;
    try {
      const user = await User.findOne({ email });

      if (!user) return res.status(400).json({ msg: 'User not found.' });

      const isOldPasswordValid = validPassword(old_password, hash, salt);

      if (!isOldPasswordValid)
        return res.status(400).json({ msg: 'Incorrect password' });

      const saltHash = genPassword(new_password);
      const newSalt = saltHash.salt;
      const newHash = saltHash.hash;

      user.salt = newSalt;
      user.hash = newHash;

      await user.save();
      return res.json({ msg: 'Updated password successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
};
