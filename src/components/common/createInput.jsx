/* eslint-disable react/prop-types */
export const CreateInput = ({ tag, state, handle }) => {
  return (
    <label htmlFor={tag}>
      {tag + ":"}
      <input type="text" id={tag} value={state} onChange={handle} />
    </label>
  );
};
