import Arrow from "../../assets/arrow.png";
import Visible from "../../assets/visible.png";
import Invisible from "../../assets/invisible.png";
import Work from "../../assets/work.png";
import { useState } from "react";

export default function Experience({
  experience,
  isActive,
  onShow,
  changeVisibility,
  addJob,
  removeJob,
  handleJobChange,
}) {
  const [formActive, setFormActive] = useState(false);
  const [activeJob, setActiveJob] = useState(experience[experience.length - 1]);

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
          <Form job={activeJob} handleChange={handleJobChange} />
          <Buttons
            job={activeJob}
            removeJob={removeJob}
            closeForm={closeForm}
            onShow={onShow}
          />
        </>
      )}
      {isActive && !formActive && (
        <Jobs
          setActiveJob={setActiveJob}
          experience={experience}
          addJob={addJob}
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
      <img src={Work} alt="" className="icon" />
      <h2>Experience</h2>
      <img
        src={Arrow}
        alt=""
        className={isActive ? "icon active" : "icon"}
        onClick={onShow}
      />
    </div>
  );
}

function Form({ job, handleChange }) {
  return (
    <form action="#">
      <ul className="information">
        <li>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            placeholder="Enter Company Name"
            data-key="company"
            onChange={(e) => handleChange(job, e)}
            className="input"
            value={job.company}
          />
        </li>
        <li>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Position Title"
            data-key="title"
            onChange={(e) => handleChange(job, e)}
            className="input"
            value={job.title}
          />
        </li>
        <li>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            placeholder="Enter Start Date"
            data-key="start"
            onChange={(e) => handleChange(job, e)}
            className="input"
            value={job.start}
          />
        </li>
        <li>
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            placeholder="Enter End Date"
            data-key="end"
            onChange={(e) => handleChange(job, e)}
            className="input"
            value={job.end}
          />
        </li>
        <li>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="City, Country"
            data-key="location"
            onChange={(e) => handleChange(job, e)}
            className="input"
            value={job.location}
          />
        </li>
        <li>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter Job Description"
            data-key="description"
            onChange={(e) => handleChange(job, e)}
            className="input"
            rows="5"
            cols="100"
            value={job.description}
          ></textarea>
        </li>
      </ul>
    </form>
  );
}

function Buttons({ job, removeJob, closeForm, onShow }) {
  return (
    <ul className="buttons">
      <li>
        <button
          onClick={() => {
            removeJob(job);
            closeForm();
          }}
        >
          Delete
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            closeForm();
            onShow();
          }}
        >
          Save
        </button>
      </li>
    </ul>
  );
}

function Jobs({
  setActiveJob,
  experience,
  addJob,
  changeVisibility,
  openForm,
}) {
  return (
    <>
      <ul>
        {experience.map((job) => (
          <li key={job.id} className="content-item">
            <button
              className="school"
              onClick={() => {
                openForm();
                setActiveJob(job);
              }}
            >
              {job.company}
            </button>
            <img
              src={job.visible ? Visible : Invisible}
              alt=""
              className="icon"
              onClick={() => {
                changeVisibility(job);
              }}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          addJob();
          setActiveJob(experience[experience.length - 1]);
          openForm();
        }}
      >
        Add Work Experience
      </button>
    </>
  );
}
