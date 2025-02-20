export function CVDocument() {
  return (
    <article id="cv-application">
      <header id="cv-topbar">
        <h1>Jhon Smith</h1>
        <div id="topbar-info-wrapper">
          <h5>Example@example.com</h5>
          <h5>+34 672 82 63 19</h5>
          <h5>Madrid, Spain</h5>
        </div>
      </header>
      <div id="titles-wrapper">
        <div className="cv-title">
          <h2>Education</h2>
        </div>
        <div className="education-content">
          <div className="education-info">
            <div className="period-wrapper">
              <p className="start-date">08/2020</p>
              <p>-</p>
              <p className="end-date">present</p>
            </div>
            <p className="location">New York City, US</p>
          </div>
          <hr />
          <div className="content">
            <p className="school">
              <b>London City University</b>
            </p>
            <p className="degree">Bachelors in Economics</p>
          </div>
        </div>
        <div className="education-content">
          <div className="education-info">
            <div className="period-wrapper">
              <p className="start-date">01/2018</p>
              <p>-</p>
              <p className="end-date">08/2020</p>
            </div>
            <p className="location">Madrid, Spain</p>
          </div>
          <hr />
          <div className="content">
            <p className="school">
              <b>Complutense de Madrid</b>
            </p>
            <p className="degree">Chemical Engineering</p>
          </div>
        </div>
        <div className="cv-title">
          <h2>Professional Experience</h2>
        </div>
        <div className="work-content">
          <div className="work-info">
            <div className="period-wrapper">
              <p className="start-date">04/2018</p>
              <p>-</p>
              <p className="end-date">02/2019</p>
            </div>
            <p className="location">Riyadh, Arabia Saudi</p>
          </div>
          <hr />
          <div className="content">
            <p className="company">
              <b>Aramco</b>
            </p>
            <p className="position">Chemical Engineer</p>
            <p className="work-description">
              Process engineer in a oil refinery. Created and usability tested
              wireframes and prototypes. Produced interactive documentation for
              quick onboarding of new researchers.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
