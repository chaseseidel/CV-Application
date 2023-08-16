import Education from "./educationSection";
import Experience from "./experienceSection";
import Info from "./infoSection";

export default function Application({ info, education, experience }) {
  return (
    <div className="application">
      <Info info={info} />
      <main>
        <Education education={education} />
        <Experience experience={experience} />
      </main>
    </div>
  );
}
