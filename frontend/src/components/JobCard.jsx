const JobCard = ({ job }) => {
  return (
    <div className="border p-4 mb-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-sm">{job.company} - {job.location}</p>
      <p className="text-sm italic mb-2">{job.type}</p>
      <p>{job.description}</p>
      <div className="mt-2">
        {job.requiredSkills.map((skill, idx) => (
          <span key={idx} className="inline-block bg-gray-200 text-xs px-2 py-1 mr-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
