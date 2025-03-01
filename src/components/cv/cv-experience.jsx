export function CVExperience({
  start,
  end,
  location,
  company,
  position,
  description,
}) {
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
          <b>{company}</b>
        </p>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
