const passport = require('passport');

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

        return res.json(user);
      });
    })(req, res, next);
  },
};
