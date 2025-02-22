export function CVHeader({ fullname, email, phoneNumber, address }) {
  return (
    <header id="cv-topbar">
      <h1>{fullname}</h1>
      <div id="topbar-info-wrapper">
        <h5>{email}</h5>
        <h5>{phoneNumber}</h5>
        <h5>{address}</h5>
      </div>
    </header>
  );
}
