import "./index.css";

import { PersonalDetails } from "./pages/personal-details";
import { Education } from "./pages/education";
import { CVDocument } from "./pages/cv";

import { usefullName } from "./hooks/personal-details/fullnameHook";
import { useEmail } from "./hooks/personal-details/emailHook";
import { usePhoneNumber } from "./hooks/personal-details/phoneNumberHook";
import { useAddress } from "./hooks/personal-details/addressHook";

function App() {
  const fullName = usefullName();
  const email = useEmail();
  const phoneNumber = usePhoneNumber();
  const address = useAddress();

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
        <Education />
      </div>
      <CVDocument
        fullname={fullName.fullname}
        email={email.email}
        phoneNumber={phoneNumber.phoneNumber}
        address={address.address}
      />
    </>
  );
}

export default App;
