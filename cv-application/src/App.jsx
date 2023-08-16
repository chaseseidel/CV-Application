import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import "./styles/reset.css";
import "./styles/style.css";
import Application from "./components/application";
import { v4 as uuidv4 } from "uuid";

const exampleInfo = {
  name: "Bob Marley",
  email: "marleybob@gmail.com",
  phone: "(808) 240 - 8012",
  address: "Kingston, Jamaica",
};

const exampleEducation = [
  {
    name: "University of Oregon",
    degree: "Computer Science",
    start: "8/12/2021",
    end: "present",
    location: "Eugene, OR",
    visible: true,
    id: uuidv4(),
  },
];

const exampleExperience = [
  {
    company: "NPJ Volleyball",
    title: "Head Coach",
    start: "8/21/2021",
    end: "present",
    location: "Salem, OR",
    description: "Work as a head coach",
    visible: true,
    id: uuidv4(),
  },
  {
    company: "Facebook",
    title: "Software Engineer",
    start: "3/7/2019",
    end: "present",
    location: "New York, NY",
    description: "Develop software for people using react",
    visible: true,
    id: uuidv4(),
  },
];

const exampleContent = [exampleInfo, exampleEducation, exampleExperience];

export default function App() {
  const [content, setContent] = useState(exampleContent);

  const handleInfoChange = (e) => {
    const newContent = [...content];
    const key = e.target.dataset.key;
    newContent[0] = {
      ...newContent[0],
      [key]: e.target.value,
    };
    setContent(newContent);
  };

  const changeVisibility = (object) => {
    object.visible = !object.visible;
    const newContent = [...content];
    setContent(newContent);
  };

  const addSchool = () => {
    const newSchool = {
      name: "",
      degree: "",
      start: "",
      end: "",
      location: "",
      visible: true,
      id: uuidv4(),
    };
    const newContent = [...content];
    newContent[1].push(newSchool);
    setContent(newContent);
  };

  const handleSchoolChange = (currentSchool, e) => {
    const newContent = [...content];
    const key = e.target.dataset.key;
    const index = newContent[1].findIndex(
      (school) => school.id === currentSchool.id
    );
    newContent[1][index][key] = e.target.value;
    setContent(newContent);
  };

  const removeSchool = (currentSchool) => {
    const newContent = [...content];
    const index = newContent[1].findIndex(
      (school) => school.id === currentSchool.id
    );
    newContent[1].splice(index, 1);
    setContent(newContent);
  };

  const addJob = () => {
    const newJob = {
      company: "",
      title: "",
      start: "",
      end: "",
      location: "",
      description: "",
      visible: true,
      id: uuidv4(),
    };
    const newContent = [...content];
    newContent[2].push(newJob);
    setContent(newContent);
    console.log(newContent);
  };

  const handleJobChange = (currentJob, e) => {
    const newContent = [...content];
    const key = e.target.dataset.key;
    const index = newContent[2].findIndex((job) => job.id === currentJob.id);
    newContent[2][index][key] = e.target.value;
    setContent(newContent);
  };

  const removeJob = (currentJob) => {
    const newContent = [...content];
    const index = newContent[2].findIndex((job) => job.id === currentJob.id);
    newContent[2].splice(index, 1);
    setContent(newContent);
  };

  return (
    <div id="container">
      <Sidebar
        education={content[1]}
        experience={content[2]}
        handleInfoChange={handleInfoChange}
        changeVisibility={changeVisibility}
        addSchool={addSchool}
        removeSchool={removeSchool}
        handleSchoolChange={handleSchoolChange}
        addJob={addJob}
        removeJob={removeJob}
        handleJobChange={handleJobChange}
      />
      <Application
        info={content[0]}
        education={content[1]}
        experience={content[2]}
      />
    </div>
  );
}
