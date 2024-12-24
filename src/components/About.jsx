import aboutMeImg from "../assets/aboutme.avif";
import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";
import { BsPersonCircle } from "react-icons/bs";

const About = () => {
  return (
    <Wrapper id="about" classes="py-10 bg-blue-100 relative">
      <div className="max-w-6xl w-11/12 mx-auto grid gap-4 lg:grid-cols-2 items-center relative h-auto rounded-3xl">
        <div>
          <SectionTitle
            classes="text-center mb-9"
            title="about me"
            icon={<BsPersonCircle className="text-4xl text-cyan-950" />}
          />
          <p className="text-2xl capitalize font-semibold text-cyan-900 mb-4">
            Here is who I am,
          </p>
          <p className="text-lg tracking-wider">
            Hello! I'm{" "}
            <span className="text-cyan-900 font-semibold">
              <a
                href="https://www.linkedin.com/in/immortalwebdev/"
                target="_blank"
              >
                Piyush Badgujar
              </a>
            </span>{" "}
            , Passionate Frontend web Developer with a solid foundation in
            modern web technologies. I specialize in creating dynamic and
            engaging user experiences through my expertise in HTML, CSS,
            JavaScript, and React, along with advanced skills in routing and
            state management using Redux. I am dedicated to delivering
            responsive, high-performance websites with a focus on optimization
            and accessibility.
            <br />
            <br />I am seeking opportunities to leverage my skills in a
            collaborative and forward-thinking team where I can contribute
            meaningfully and continue to grow as a frontend developer.
          </p>
        </div>

        <div className="flex justify-center lg:justify-start">
          <img
            className="w-full max-w-xs lg:max-w-xl mx-auto rounded-[100px] shadow-sm"
            src={aboutMeImg}
            alt="About Me"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
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
