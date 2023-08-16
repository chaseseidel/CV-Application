import Arrow from "../../assets/arrow.png";
import Visible from "../../assets/visible.png";
import Invisible from "../../assets/invisible.png";
import School from "../../assets/education.png";
import { useState } from "react";

export default function Education({
  education,
  isActive,
  onShow,
  changeVisibility,
  addSchool,
  removeSchool,
  handleSchoolChange,
}) {
  const [formActive, setFormActive] = useState(false);
  const [activeSchool, setActiveSchool] = useState(
    education[education.length - 1]
  );

  const openForm = () => {
    setFormActive(true);
  };

  const closeForm = () => {
    setFormActive(false);
  };

  return (
    <>
      <Header isActive={isActive} onShow={onShow} />
      {isActive && formActive && (
        <>
          <Form school={activeSchool} handleChange={handleSchoolChange} />
          <Buttons
            school={activeSchool}
            removeSchool={removeSchool}
            closeForm={closeForm}
            onShow={onShow}
          />
        </>
      )}
      {isActive && !formActive && (
        <Schools
          setActiveSchool={setActiveSchool}
          education={education}
          addSchool={addSchool}
          openForm={openForm}
          changeVisibility={changeVisibility}
        />
      )}
    </>
  );
}

function Header({ isActive, onShow }) {
  return (
    <div className="sectionHeader">
      <img src={School} alt="" className="icon" />
      <h2>Education</h2>
      <img
        src={Arrow}
        alt=""
        className={isActive ? "icon active" : "icon"}
        onClick={onShow}
      />
    </div>
  );
}

function Form({ school, handleChange }) {
  return (
    <form action="#">
      <ul className="information">
        <li>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            placeholder="Enter school / university"
            data-key="name"
            onChange={(e) => handleChange(school, e)}
            className="input"
            value={school.name}
          />
        </li>
        <li>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            placeholder="Enter Degree / Field of Study"
            data-key="degree"
            onChange={(e) => handleChange(school, e)}
            className="input"
            value={school.degree}
          />
        </li>
        <li>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            placeholder="Enter Start Date"
            data-key="start"
            onChange={(e) => handleChange(school, e)}
            className="input"
            value={school.start}
          />
        </li>
        <li>
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            placeholder="Enter End Date"
            data-key="end"
            onChange={(e) => handleChange(school, e)}
            className="input"
            value={school.end}
          />
        </li>
        <li>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="City, Country"
            data-key="location"
            onChange={(e) => handleChange(school, e)}
            className="input"
            value={school.location}
          />
        </li>
      </ul>
    </form>
  );
}

function Buttons({ school, removeSchool, closeForm, onShow }) {
  return (
    <ul className="buttons">
      <li>
        <button
          onClick={() => {
            removeSchool(school);
            closeForm();
          }}
        >
          Delete
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onShow();
            closeForm();
          }}
        >
          Save
        </button>
      </li>
    </ul>
  );
}

function Schools({
  setActiveSchool,
  education,
  addSchool,
  openForm,
  changeVisibility,
}) {
  return (
    <>
      <ul>
        {education.map((school) => (
          <li key={school.id} className="content-item">
            <button
              className="school"
              onClick={() => {
                openForm();
                setActiveSchool(school);
              }}
            >
              {school.name}
            </button>
            <img
              src={school.visible ? Visible : Invisible}
              alt=""
              className="icon"
              onClick={() => {
                changeVisibility(school);
              }}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          addSchool();
          setActiveSchool(education[education.length - 1]);
          openForm();
        }}
      >
        Add School
      </button>
    </>
  );
}
