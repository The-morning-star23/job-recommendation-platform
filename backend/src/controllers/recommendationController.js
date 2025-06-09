const Job = require('../models/Job');
const User = require('../models/User');

const getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const skillMatchJobs = await Job.find({
      requiredSkills: { $in: user.skills },
      type: user.preferences?.jobType,
      location: user.preferences?.location,
    });

    console.log('Jobs found:', skillMatchJobs.length);
    res.json(skillMatchJobs);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getRecommendations };