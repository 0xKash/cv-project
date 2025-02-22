/* eslint-disable react/prop-types */
export function Email({ email, handleEmail }) {
  return (
    <label htmlFor="email">
      Email:
      <input type="email" id="email" value={email} onChange={handleEmail} />
    </label>
  );
}
