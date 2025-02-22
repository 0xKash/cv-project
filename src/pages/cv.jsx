/* eslint-disable react/prop-types */
import { CVEducation } from "../components/cv/cv-education";
import { CVExperience } from "../components/cv/cv-experience";
import { CVHeader } from "../components/cv/cv-header";

export function CVDocument({ fullname, email, phoneNumber, address }) {
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
        <CVEducation />
        <div className="cv-title">
          <h2>Professional Experience</h2>
        </div>
        <CVExperience />
      </div>
    </article>
  );
}
