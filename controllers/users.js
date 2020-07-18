const { genPassword } = require('../lib/passwordUtils');
const User = require('../models/User');

module.exports = {
  registerUser: async (req, res) => {
    const { name, username, email, phone, password, isAdmin } = req.body;

    if (!name) return res.status(400).json({ msg: 'Name should not be empty' });
    if (!email)
      return res.status(400).json({ msg: 'Email should not be empty' });
    if (!phone)
      return res.status(400).json({ msg: 'Phone number should not be empty' });
    if (!password)
      return res.status(400).json({ msg: 'Password should not be empty' });

    const saltHash = genPassword(password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    // Check if user with the same email already exists
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ msg: 'User with the same email already exists' });
    }

    //  Check if user with the same phone number exists
    const phoneNumber = await User.findOne({ phone });

    if (phoneNumber) {
      return res
        .status(400)
        .json({ msg: 'User with the same phone number already exists' });
    }

    user = new User({
      name,
      username,
      email,
      phone,
      isAdmin,
      hash,
      salt,
    });

    await user.save();

    return res.json({ user });
  },
};
