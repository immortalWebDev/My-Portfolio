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
    <Wrapper id="skills">
      <SectionTitle
        classes="text-center"
        icon={<FaTools className="text-3xl text-white" />}
      />
      <div className="grid grid-cols-2 max-w-4xl w-11/12">
        {skills.map((skill) => (
          <div
            key={index}
            className="grid items-center  ease-in-out duration-150"
          >
            <span>{skill.icon}</span>
            <p className="font-bold capitalize">{skill.title}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
