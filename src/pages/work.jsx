import { useState } from "react";

import { DropdownButton } from "../components/education/dropdown";
import { CreateInput } from "../components/common/createInput";

export const Experience = ({
  company,
  position,
  start,
  end,
  location,
  description,
  handleCompany,
  handlePosition,
  handleStart,
  handleEnd,
  handleLocation,
  handleDescription,
  pushArr,
}) => {
  const [isActive, setActive] = useState(false);
  const handleDropdown = () => (isActive ? setActive(false) : setActive(true));

  return (
    <>
      <section className="sidebar-section">
        <div className="sidebar-title-wrapper">
          <h2>Experience</h2>
          <DropdownButton handleDropdown={handleDropdown} />
        </div>
        {isActive && (
          <>
            <CreateInput
              tag={"Company Name"}
              state={company}
              handle={handleCompany}
            />
            <CreateInput
              tag={"Position Title"}
              state={position}
              handle={handlePosition}
            />
            <CreateInput
              tag={"Start Date"}
              state={start}
              handle={handleStart}
            />
            <CreateInput tag={"End Date"} state={end} handle={handleEnd} />
            <CreateInput
              tag={"Location"}
              state={location}
              handle={handleLocation}
            />
            <CreateInput
              tag={"Description"}
              state={description}
              handle={handleDescription}
            />

            <button className="dropdown-save" onClick={pushArr}>
              Save
            </button>
          </>
        )}
      </section>
    </>
  );
};
