/* eslint-disable react/prop-types */
import { CVEducation } from "../components/cv/cv-education";
import { CVExperience } from "../components/cv/cv-experience";
import { CVHeader } from "../components/cv/cv-header";

export function CVDocument({
  fullname,
  email,
  phoneNumber,
  address,
  education,
  experience,
}) {
  return (
    <article id="cv-application">
      <CVHeader
        fullname={fullname}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />
      <div id="cv-content-wrapper">
        <div className="cv-title">
          <h2>Education</h2>
        </div>
        {education.map((element, index) => (
          <CVEducation
            key={index}
            school={element.school}
            degree={element.degree}
            start={element.start}
            end={element.end}
            location={element.location}
          />
        ))}
        <div className="cv-title">
          <h2>Professional Experience</h2>
        </div>
        {experience.map((element, index) => (
          <CVExperience
            key={index}
            company={element.company}
            position={element.position}
            start={element.start}
            end={element.end}
            location={element.location}
            description={element.description}
          />
        ))}
      </div>
    </article>
  );
}
