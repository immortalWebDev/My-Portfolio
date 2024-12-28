import Wrapper from "./UI/Wrapper";

import SectionTitle from "./UI/SectionTitle";
import { FaLaptopCode } from "react-icons/fa";

const Projects = () => {
  return (
    <Wrapper id="projects" classes="bg-violet-200 py-10 relative">
      <SectionTitle
        classes="text-center mb-5"
        title="Main Projects"
        icon={<FaLaptopCode className="text-4xl text-orange-950" />}
      />
    </Wrapper>
  );
};

export default Projects;
