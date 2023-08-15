export default function Education({ education }) {
  if (education.length > 0) {
    return (
      <>
        <ul>
          <h3>Education</h3>
          {education.map((school) => (
            <li key={school.name} className="listContent">
              <div className="info">
                <p>
                  {school.start} - {school.end}
                </p>
                <p>{school.location}</p>
              </div>
              <div className="content">
                <h4>{school.name}</h4>
                <p>{school.degree}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
