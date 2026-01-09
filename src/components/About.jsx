import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";
import {
  BsPersonWorkspace,
} from "react-icons/bs";

const About = () => {
  return (
    <Wrapper id="about" classes="py-10 pb-20 bg-blue-100 relative">
      <div className="max-w-6xl w-11/12 mx-auto grid gap-4 lg:grid-cols-2 items-center relative h-auto rounded-3xl">
        <div>
          <SectionTitle
            classes="text-center mb-9"
            title="my story"
            icon={<BsPersonWorkspace className="text-4xl text-cyan-950" />}
          />
          <p className="text-2xl capitalize font-semibold text-cyan-900 mb-4">
            Here is who I am,
          </p>
          <p className="text-lg tracking-wider sm:text-base lg:text-lg">
            Hello! I'm{" "}
            <span className="text-cyan-900 font-semibold">
              <a
                href="https://www.linkedin.com/in/immortalwebdev/"
                target="_blank"
              >
                <b>Piyush</b>
              </a>
            </span>
            , Passionate <strong>Frontend web Developer</strong> with a solid
            foundation in modern web technologies. I like creating{" "}
            <strong>dynamic</strong> and engaging user experiences through my
            interest in <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, and <strong>React</strong>, along with
            advanced skills in <strong>routing</strong> and{" "}
            <strong>state management</strong> using <strong>Redux</strong>. I am{" "}
            <b>dedicated</b> to delivering <strong>responsive</strong>,
            high-performance websites with a focus on{" "}
            <strong>optimization</strong> and <strong>accessibility</strong>.
            <br />
            <br />I am seeking opportunities to leverage my skills in a{" "}
            <b>collaborative</b> and <b>forward-thinking</b> team where I can
            contribute meaningfully and continue to <b>grow</b> as a{" "}
            <b>web</b> developer with <strong>AI</strong> skills.
          </p>
        </div>

        <div className="flex justify-center lg:justify-start">
          <img
            className="w-full max-w-xs lg:max-w-xl mx-auto rounded-[100px] shadow-sm"
            src="https://cdn.jsdelivr.net/gh/immortalWebDev/my-cdn@c3730014d8a30677355bb9ce7c21b13afb065399/portfolio-images/aboutme.avif"
            alt="About Me"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="none"
            stroke="blue"
            strokeWidth="2"
            d="M0,50 Q360,0 720,50 T1440,50"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default About;
