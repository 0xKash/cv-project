/* eslint-disable react/prop-types */
export function PhoneNumber({ phoneNumber, handlePhoneNumber }) {
  return (
    <label htmlFor="phone-number">
      Phone number:
      <input
        type="text"
        id="phone-number"
        value={phoneNumber}
        onChange={handlePhoneNumber}
      />
    </label>
  );
}
