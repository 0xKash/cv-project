import { useAcademic } from "../../hooks/education/academicHook";

export const CreateWidget = () => {
  const { academic, setAcademic } = useAcademic();

  return academic.map((e) => (
    <section className="sidebar-section" key={e.school}>
      <div className="sidebar-title-wrapper">
        <h3>{e.school}</h3>
        <button
          onClick={() => {
            setAcademic(academic.filter((a) => a.school != e.school));
            console.log(academic);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFF"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </div>
    </section>
  ));
};
