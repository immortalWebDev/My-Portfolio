import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
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
    </Wrapper>
  );
};

export default Skills;
