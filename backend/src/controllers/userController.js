const User = require('../models/User');

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      skills: user.skills,
      experience: user.experience,
      preferences: user.preferences
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.skills = req.body.skills || user.skills;
    user.experience = req.body.experience || user.experience;
    user.preferences = req.body.preferences || user.preferences;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      skills: updatedUser.skills,
      experience: updatedUser.experience,
      preferences: updatedUser.preferences
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getUserProfile, updateUserProfile };
