import "./index.css";

import { PersonalDetails } from "./pages/personal-details";
import { Education } from "./pages/education";
import { CVDocument } from "./pages/cv";

import { usefullName } from "./hooks/personal-details/fullnameHook";
import { useEmail } from "./hooks/personal-details/emailHook";
import { usePhoneNumber } from "./hooks/personal-details/phoneNumberHook";
import { useAddress } from "./hooks/personal-details/addressHook";

import { useSchool } from "./hooks/education/schoolHook";
import { useDegree } from "./hooks/education/degreeHook";
import { useDate } from "./hooks/education/dateHook";
import { useLocation } from "./hooks/education/locationHook";
import { useAcademic } from "./hooks/education/academicHook";

import { CreateWidget } from "./components/common/createWidget";

// ================================================================================ //

function App() {
  const academic = useAcademic();
  const fullName = usefullName();
  const email = useEmail();
  const phoneNumber = usePhoneNumber();
  const address = useAddress();

  const school = useSchool();
  const degree = useDegree();
  const date = useDate();
  const location = useLocation();

  return (
    <>
      <div id="sidebar">
        <PersonalDetails
          handleFullname={fullName.handleFullname}
          handleEmail={email.handleEmail}
          handlePhoneNumber={phoneNumber.handlePhoneNumber}
          handleAddress={address.handleAddress}
          fullname={fullName.fullname}
          email={email.email}
          phoneNumber={phoneNumber.phoneNumber}
          address={address.address}
        />
        <Education
          school={school.school}
          handleSchool={school.handleSchool}
          degree={degree.degree}
          handleDegree={degree.handleDegree}
          start={date.start}
          handleStart={date.handleStart}
          end={date.end}
          handleEnd={date.handleEnd}
          location={location.location}
          handleLocation={location.handleLocation}
          arr={academic}
          updateState={() => {
            academic.setAcademic([
              ...academic.academic,
              {
                school: school.school,
                degree: degree.degree,
                start: date.start,
                end: date.end,
                location: location.location,
              },
            ]);
            school.setSchool("");
            degree.setDegree("");
            date.setStart("");
            date.setEnd("");
            location.setLocation("");
          }}
        />
        <CreateWidget arr={academic.academic} />
      </div>
      <CVDocument
        fullname={fullName.fullname}
        email={email.email}
        phoneNumber={phoneNumber.phoneNumber}
        address={address.address}
        arr={academic.academic}
      />
    </>
  );
}

export default App;
