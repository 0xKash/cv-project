export function CVEducation({ school, degree, start, end, location }) {
  return (
    <div className="cv-content">
      <div>
        <div className="period-wrapper">
          <p>{start}</p>
          <p>-</p>
          <p>{end}</p>
        </div>
        <p>{location}</p>
      </div>
      <hr />
      <div>
        <p>
          <b>{school}</b>
        </p>
        <p>{degree}</p>
      </div>
    </div>
  );
}
