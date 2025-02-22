/* eslint-disable react/prop-types */
import { Fullname } from "../components/personal-details/fullName";
import { PhoneNumber } from "../components/personal-details/phoneNumber";
import { Email } from "../components/personal-details/email";
import { Address } from "../components/personal-details/address";

export function PersonalDetails({
  fullname,
  handleFullname,
  email,
  handleEmail,
  phoneNumber,
  handlePhoneNumber,
  address,
  handleAddress,
}) {
  return (
    <section className="sidebar-section" id="personal-details">
      <h2>Personal Details</h2>
      <Fullname fullname={fullname} handleFullname={handleFullname} />
      <Email email={email} handleEmail={handleEmail} />
      <PhoneNumber
        phoneNumber={phoneNumber}
        handlePhoneNumber={handlePhoneNumber}
      />
      <Address address={address} handleAddress={handleAddress} />
    </section>
  );
}
