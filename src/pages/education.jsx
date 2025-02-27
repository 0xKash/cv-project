/* eslint-disable react/prop-types */
import { useState } from "react";

import { CreateInput } from "../components/common/createInput";
import { CreateWidget } from "../components/common/createWidget";
import { DropdownButton } from "../components/education/dropdown";

// =================================================================== //

export function Education({
  school,
  handleSchool,
  degree,
  handleDegree,
  start,
  handleStart,
  end,
  handleEnd,
  location,
  handleLocation,
  updateState,
  arr,
}) {
  const [isActive, setActive] = useState(false);
  const handleDropdown = () => (isActive ? setActive(false) : setActive(true));

  return (
    <>
      <section className="sidebar-section">
        <div className="sidebar-title-wrapper">
          <h2>Education</h2>
          <DropdownButton handleDropdown={handleDropdown} />
        </div>
        {isActive && (
          <>
            <CreateInput tag={"School"} state={school} handle={handleSchool} />
            <CreateInput tag={"Degree"} state={degree} handle={handleDegree} />
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
            <button className="dropdown-save" onClick={updateState}>
              Save
            </button>
          </>
        )}
      </section>
    </>
  );
}
