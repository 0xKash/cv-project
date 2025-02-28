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
  const { academic, setAcademic } = useAcademic();

  const { fullname, handleFullname } = usefullName();
  const { email, handleEmail } = useEmail();
  const { phoneNumber, handlePhoneNumber } = usePhoneNumber();
  const { address, handleAddress } = useAddress();

  const { school, handleSchool } = useSchool();
  const { degree, handleDegree } = useDegree();
  const { start, end, handleStart, handleEnd } = useDate();
  const { location, handleLocation } = useLocation();

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
        />
      </div>
      <CVDocument
        fullname={fullname}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />
    </>
  );
}

export default App;
