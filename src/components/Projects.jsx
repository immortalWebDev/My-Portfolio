import Wrapper from "./UI/Wrapper";
import SingleProject from "./SingleProject";
import SectionTitle from "./UI/SectionTitle";
import { FaLaptopCode } from "react-icons/fa";
import {mainProjects} from "../components/projectData/mainProjects"

const Projects = () => {
  return (
    <Wrapper id="projects" classes="bg-violet-200 py-10 pb-24 relative">
      <SectionTitle classes="text-center mb-5" title="Flagship Projects" icon = {<FaLaptopCode className="text-4xl text-orange-950"/>} />
      <div className="max-w-6xl w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 rounded-3xl h-3/4 lg:py-10">
        {mainProjects.map((project, index) => (
          <SingleProject key={index} projectInfo={project} />
        ))}
      </div>

      <div className="absolute -bottom-2 left-0 w-full pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="none"
            stroke="red"
            strokeWidth="2"
            d="M0,50 Q360,0 720,50 T1440,50"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default Projects;
