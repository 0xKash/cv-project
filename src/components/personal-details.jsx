import { useState } from "react";

export function PersonalDetails() {
  let [fullname, setFullname] = useState("Mark");
  let [email, setEmail] = useState("Example@example.com");
  let [phoneNumber, setPhoneNumber] = useState("+34 672 82 63 19");
  let [address, setAddress] = useState("Madrid, Spain");

  function handleNameChange(e) {
    setFullname(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  return (
    <section className="input-section" id="personal-details">
      <h2>Personal Details</h2>
      <label htmlFor="fullname">
        Fullname:
        <input
          type="text"
          id="fullname"
          value={fullname}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="phone-number">
        Phone number:
        <input
          type="text"
          id="phone-number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <label htmlFor="address">
        Address:
        <input type="text" id="address" value={address} onChange={setAddress} />
      </label>
    </section>
  );
}
