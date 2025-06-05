const Job = require('../models/Job');

const getJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.json(jobs);
};

const createJob = async (req, res) => {
  const job = new Job({ ...req.body });
  const createdJob = await job.save();
  res.status(201).json(createdJob);
};

const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
};

const updateJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (job) {
    Object.assign(job, req.body);
    const updatedJob = await job.save();
    res.json(updatedJob);
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
};

const deleteJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (job) {
    await job.deleteOne();
    res.json({ message: 'Job deleted' });
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
};

module.exports = {
  getJobs,
  createJob,
  getJobById,
  updateJob,
  deleteJob
};
