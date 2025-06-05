const Job = require('../models/Job');

const getJobsByUserProfile = async (user) => {
  return await Job.find({
    requiredSkills: { $in: user.skills },
    type: user.preferences?.jobType,
    location: user.preferences?.location
  });
};

module.exports = { getJobsByUserProfile };
