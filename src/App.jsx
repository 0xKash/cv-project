import "./App.css";

import { ClearResume } from "./components/clear-resume";
import { PersonalDetails } from "./components/personal-details";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { CVDocument } from "./components/cv";

function App() {
  return (
    <>
      <div id="left-side">
        <ClearResume />
        <PersonalDetails />
        <Education />
        <Experience />
      </div>
      <CVDocument />
    </>
  );
}

export default App;
