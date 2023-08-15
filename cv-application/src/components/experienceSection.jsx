export default function Experience({ experience }) {
  if (experience.length > 0) {
    return (
      <>
        <ul>
          <h3>Experience</h3>
          {experience.map((job) => (
            <li key={job.title} className="listContent">
              <div className="info">
                <p>
                  {job.start} - {job.end}
                </p>
                <p>{job.location}</p>
              </div>
              <div className="content">
                <h4>{job.company}</h4>
                <h5>{job.title}</h5>
                <p>{job.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
