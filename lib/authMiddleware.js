module.exports = {
  isAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).json({ msg: 'Access denied!' });
    }
  },

  isAdmin: (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      return next();
    } else {
      res.status(401).json({ msg: 'Access denied!' });
    }
  },
};
