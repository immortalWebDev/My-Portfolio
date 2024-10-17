import Wrapper from "./UI/Wrapper";

const About = () => {
  return (
    <Wrapper id="about" classes="py-10">
      <div className="max-w-6xl rounded-3xl ">
        <div>
          <SectionTitle title="about me" icon={<BsPersonCircle />} />
          <p className="text-2xl mb-4">Know me</p>
          <p className="text-lg tracking-wider">
            Hello! I'm <span className="font-semibold">Piyush</span> ,
            Passionate Frontend Developer
            <br />
            <br />I am seeking opportunities to leverage my skills
          </p>
        </div>
        <img className="lg:block max-w-xl" src={aboutMeImg} alt="About Me" />
      </div>
    </Wrapper>
  );
};

export default About;
