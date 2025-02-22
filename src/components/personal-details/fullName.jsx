/* eslint-disable react/prop-types */
export function Fullname({ fullname, handleFullname }) {
  return (
    <label htmlFor="fullname">
      Fullname:
      <input
        type="text"
        id="fullname"
        value={fullname}
        onChange={handleFullname}
      />
    </label>
  );
}
