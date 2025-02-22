/* eslint-disable react/prop-types */
export function Address({ address, handleAddress }) {
  return (
    <label htmlFor="address">
      Address:
      <input
        type="text"
        id="address"
        value={address}
        onChange={handleAddress}
      />
    </label>
  );
}
