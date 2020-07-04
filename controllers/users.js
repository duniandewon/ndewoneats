const { genPassword } = require('../lib/passwordUtils');
const User = require('../models/User');

module.exports = {
  registerUser: async (req, res) => {
    const { name, username, email, password, isAdmin } = req.body;

    if (!name) return res.status(400).json({ msg: 'Name should not be empty' });
    // if (!username)
    //   return res.status(400).json({ msg: 'Usename should not be empty' });
    if (!email)
      return res.status(400).json({ msg: 'Email should not be empty' });
    if (!password)
      return res.status(400).json({ msg: 'Password should not be empty' });

    const saltHash = genPassword(password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    // Check if user with the same email already exist
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ msg: 'User with the same email already exists' });
    }

    user = new User({
      name,
      username,
      email,
      isAdmin,
      hash,
      salt,
    });

    await user.save();

    res.json({ user });

    console.error(err.message);
    res.status(500).send('Server error');
  },
};
