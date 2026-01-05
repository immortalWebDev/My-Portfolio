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
  BiLogoGit,
} from "react-icons/bi";
import { SiNextdotjs, SiPostman, SiVite } from "react-icons/si";
import { FaBootstrap, FaTools } from "react-icons/fa";
import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";
import { CgVercel } from "react-icons/cg";

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
    title: "React",
    icon: <BiLogoReact className="text-6xl px-2 inline pe-2 text-sky-600" />,
  },
  {
    title: "Redux Toolkit",
    icon: <BiLogoRedux className="text-6xl text-purple-500 px-2 inline pe-2" />,
  },
  {
    title: "Github",
    icon: <BiLogoGithub className="text-6xl text-gray-900 px-2 inline pe-2" />,
  },
  {
    title: "Git",
    icon: <BiLogoGit className="text-6xl text-gray-900 px-2 inline pe-2" />,
  },
  {
    title: "Firebase",
    icon: (
      <BiLogoFirebase className="text-6xl text-yellow-400 px-2 inline pe-2" />
    ),
  },
  {
    title: "Vite & Vitest",
    icon: <SiVite className="text-6xl  text-violet-600 px-2 inline pe-2" />,
  },
  {
    title: "TailwindCSS",
    icon: (
      <BiLogoTailwindCss className="text-6xl text-sky-600 px-2 inline pe-2" />
    ),
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap className="text-6xl px-2 inline pe-2 text-blue-800" />,
  },

  {
    title: "React Bootstrap",
    icon: <FaBootstrap className="text-6xl text-orange-600 px-2 inline pe-2" />,
  },

  // {
  //   title: "Next JS",
  //   icon: <SiNextdotjs className="text-6xl text-black-600 px-2 inline pe-2" />,
  // },

  // {
  //   title: "Node JS",
  //   icon: (
  //     <BiLogoNodejs className="text-6xl  text-green-400 px-2 inline pe-2" />
  //   ),
  // },

  {
    title: "Postman",
    icon: <SiPostman className="text-6xl px-2 inline pe-2" />,
  },
  // {
  //   title: "Mongo DB",
  //   icon: (
  //     <BiLogoMongodb className="text-6xl text-green-600 px-2 inline pe-2" />
  //   ),
  // },

  {
    title: "Deployment",
    icon: <CgVercel className="text-6xl px-2 inline pe-2" />,
  },
];

const Skills = () => {
  return (
    <Wrapper id="skills" classes="bg-purple-300 py-8 relative">
      <SectionTitle
        classes="text-center mb-6"
        title="Tech Skills"
        icon={<FaTools className="text-3xl text-white" />}
      />

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 bg-stone-100 rounded-lg shadow-md border border-[#1E90FF] transition-transform duration-200 hover:scale-105"
          >
            <span className="text-4xl">{skill.icon}</span>
            <p className="text-sm font-semibold text-gray-800 mt-2 text-center">
              {skill.title}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full">
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
