/* eslint-disable react/prop-types */
import { CreateInput } from "../components/common/createInput";

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
      <CreateInput tag={"Fullname"} state={fullname} handle={handleFullname} />
      <CreateInput tag={"Email"} state={email} handle={handleEmail} />
      <CreateInput
        tag={"Phone Number"}
        state={phoneNumber}
        handle={handlePhoneNumber}
      />
      <CreateInput tag={"Address"} state={address} handle={handleAddress} />
    </section>
  );
}
