const Job = require('../models/Job');
const User = require('../models/User');

const getRecommendations = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) return res.status(404).json({ message: 'User not found' });

  const skillMatchJobs = await Job.find({
    requiredSkills: { $in: user.skills },
    type: user.preferences?.jobType,
    location: user.preferences?.location
  });

  res.json(skillMatchJobs);
};

module.exports = { getRecommendations };
