import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoRedux,
  BiLogoFirebase,
  BiLogoGithub,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { FaBootstrap, FaDeploydog, FaTools } from "react-icons/fa";
import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";

const skills = [
  {
    title: "JavaScript",
    icon: (
      <BiLogoJavascript className="text-6xl text-yellow-500 px-2 inline pe-2" />
    ),
  },
  {
    title: "HTML",
    icon: <BiLogoHtml5 className="text-6xl text-orange-600 px-2 inline pe-2" />,
  },
  {
    title: "CSS",
    icon: <BiLogoCss3 className="text-6xl px-2 inline pe-2 text-blue-600" />,
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap className="text-6xl px-2 inline pe-2 text-blue-800" />,
  },
  {
    title: "TailwindCSS",
    icon: (
      <BiLogoTailwindCss className="text-6xl text-sky-600 px-2 inline pe-2" />
    ),
  },
  {
    title: "React Bootstrap",
    icon: <FaBootstrap className="text-6xl text-orange-600 px-2 inline pe-2" />,
  },
  {
    title: "React",
    icon: <BiLogoReact className="text-6xl px-2 inline pe-2 text-sky-600" />,
  },
  {
    title: "Next JS",
    icon: (
      <SiNextdotjs className="text-6xl text-black-600 px-2 inline pe-2" />
    ),
  },
  {
    title: "Redux & Toolkit",
    icon: <BiLogoRedux className="text-6xl text-purple-500 px-2 inline pe-2" />,
  },
  {
    title: "Mongo DB",
    icon: <BiLogoMongodb className="text-6xl text-green-600 px-2 inline pe-2" />,
  },
  {
    title: "Github",
    icon: <BiLogoGithub className="text-6xl text-gray-900 px-2 inline pe-2" />,
  },
  {
    title: "Firebase",
    icon: (
      <BiLogoFirebase className="text-6xl text-yellow-400 px-2 inline pe-2" />
    ),
  },
  {
    title: "Node JS",
    icon: <BiLogoNodejs className="text-6xl  text-green-400 px-2 inline pe-2" />,
  },
  {
    title: "Vite & Vitest",
    icon: <SiVite className="text-6xl  text-violet-600 px-2 inline pe-2" />,
  },
  {
    title: "Deployment",
    icon: <FaDeploydog className="text-6xl px-2 inline pe-2" />,
  },
];

const Skills = () => {
  return (
    <Wrapper id="skills" classes="bg-purple-300 py-10 relative">
      <SectionTitle
        classes="text-center lg:mb-5"
        title="Tech Skills"
        icon={<FaTools className="text-3xl text-white" />}
      />
      <div className="grid lg:grid-cols-3 grid-cols-2 max-w-4xl w-11/12 mx-auto content-center items-center h-3/4 lg:py-10 mt-6 gap-4 md:gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="grid items-center justify-center bg-stone-100 rounded-md p-2 shadow-lg text-center border border-[#1E90FF] hover:-translate-y-1 hover:shadow-lg delay-100 ease-in-out duration-150"
          >
            <span>{skill.icon}</span>
            <p className="font-bold text-gray-800 md:text-2xl capitalize">
              {skill.title}
            </p>
          </div>
        ))}
      </div>


      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="none"
            stroke="#1E90FF"
            strokeWidth="2"
            d="M0,50 Q360,0 720,50 T1440,50"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default Skills;

