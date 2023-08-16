import Experience from "./experience";
import Education from "./education";
import PersonalInfo from "./personalInfo";
import SideContainer from "./sideContainer";
import { useState } from "react";

export default function Sidebar({
  education,
  experience,
  handleInfoChange,
  changeVisibility,
  addSchool,
  removeSchool,
  handleSchoolChange,
  addJob,
  removeJob,
  handleJobChange,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="sidebar">
      <SideContainer>
        <PersonalInfo handleChange={handleInfoChange} />
      </SideContainer>
      <SideContainer>
        <Education
          education={education}
          isActive={activeIndex === 0}
          onShow={() => {
            activeIndex === 0 ? setActiveIndex(-1) : setActiveIndex(0);
          }}
          changeVisibility={changeVisibility}
          addSchool={addSchool}
          removeSchool={removeSchool}
          handleSchoolChange={handleSchoolChange}
        />
      </SideContainer>
      <SideContainer>
        <Experience
          experience={experience}
          isActive={activeIndex === 1}
          onShow={() => {
            activeIndex === 1 ? setActiveIndex(-1) : setActiveIndex(1);
          }}
          changeVisibility={changeVisibility}
          addJob={addJob}
          removeJob={removeJob}
          handleJobChange={handleJobChange}
        />
      </SideContainer>
    </div>
  );
}
