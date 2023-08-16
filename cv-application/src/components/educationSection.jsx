export default function Education({ education }) {
  const visibleSchools = education.filter((school) => school.visible);

  if (education.length > 0 && visibleSchools.length > 0) {
    return (
      <>
        <ul>
          <h3>Education</h3>
          {education.map(
            (school) =>
              school.visible && (
                <li key={school.id} className="listContent">
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
              )
          )}
        </ul>
      </>
    );
  }
}
