import "./index.css";

// COMPONENTS

import { PersonalDetails } from "./pages/personal-details";
import { Education } from "./pages/education";
import { CVDocument } from "./pages/cv";
import { CreateWidget } from "./components/common/createWidget";
import { Experience } from "./pages/work";

// HOOKS

import { usefullName } from "./hooks/personal-details/fullnameHook";
import { useEmail } from "./hooks/personal-details/emailHook";
import { usePhoneNumber } from "./hooks/personal-details/phoneNumberHook";
import { useAddress } from "./hooks/personal-details/addressHook";

import { useSchool } from "./hooks/education/schoolHook";
import { useDegree } from "./hooks/education/degreeHook";
import { useDate } from "./hooks/education/dateHook";
import { useLocation } from "./hooks/education/locationHook";
import { useAcademic } from "./hooks/education/academicHook";

import { useCompanyExp } from "./hooks/experience/companyHook";
import { usePositionExp } from "./hooks/experience/positionHook";
import { useLocationExp } from "./hooks/experience/locationHook";
import { useDateExp } from "./hooks/experience/dateHook";
import { useDescriptionExp } from "./hooks/experience/descriptionHook";
import { useExperience } from "./hooks/experience/experienceHook";

// ================================================================================ //

function App() {
  const { academic, setAcademic } = useAcademic();
  const { experience, setExperience } = useExperience();

  const { fullname, handleFullname } = usefullName();
  const { email, handleEmail } = useEmail();
  const { phoneNumber, handlePhoneNumber } = usePhoneNumber();
  const { address, handleAddress } = useAddress();

  const { school, handleSchool } = useSchool();
  const { degree, handleDegree } = useDegree();
  const { start, end, handleStart, handleEnd } = useDate();
  const { location, handleLocation } = useLocation();

  const { companyExp, handleCompanyExp } = useCompanyExp();
  const { positionExp, handlePositionExp } = usePositionExp();
  const { locationExp, handleLocationExp } = useLocationExp();
  const { startExp, endExp, handleStartExp, handleEndExp } = useDateExp();
  const { descriptionExp, handleDescriptionExp } = useDescriptionExp();

  return (
    <>
      <div id="sidebar">
        <PersonalDetails
          fullname={fullname}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          handleFullname={handleFullname}
          handleEmail={handleEmail}
          handlePhoneNumber={handlePhoneNumber}
          handleAddress={handleAddress}
        />
        <Education
          school={school}
          degree={degree}
          start={start}
          end={end}
          location={location}
          handleSchool={handleSchool}
          handleDegree={handleDegree}
          handleStart={handleStart}
          handleEnd={handleEnd}
          handleLocation={handleLocation}
          arr={academic}
          pushArr={() => {
            setAcademic([
              ...academic,
              {
                id: crypto.randomUUID(),
                school: school,
                degree: degree,
                start: start,
                end: end,
                location: location,
              },
            ]);
          }}
        />
        {academic.map((element) => (
          <CreateWidget
            key={crypto.randomUUID()}
            title={element.school}
            subtitle={element.degree}
            action={() =>
              setAcademic(academic.filter((a) => a.id != element.id))
            }
          />
        ))}
        <Experience
          company={companyExp}
          position={positionExp}
          start={startExp}
          end={endExp}
          location={locationExp}
          description={descriptionExp}
          handleCompany={handleCompanyExp}
          handlePosition={handlePositionExp}
          handleStart={handleStartExp}
          handleEnd={handleEndExp}
          handleLocation={handleLocationExp}
          handleDescription={handleDescriptionExp}
          pushArr={() =>
            setExperience([
              ...experience,
              {
                company: companyExp,
                position: positionExp,
                start: startExp,
                end: endExp,
                location: locationExp,
                description: descriptionExp,
              },
            ])
          }
        />
        {experience.map((element) => (
          <CreateWidget
            key={crypto.randomUUID()}
            title={element.company}
            subtitle={element.position}
            action={() =>
              setExperience(experience.filter((a) => a.id != element.id))
            }
          />
        ))}
      </div>

      <CVDocument
        fullname={fullname}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        education={academic}
        experience={experience}
      />
    </>
  );
}

export default App;
