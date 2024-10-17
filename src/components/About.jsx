import Wrapper from "./UI/Wrapper";

const About = () => {
  return (
    <Wrapper id="about" classes="py-10 bg-blue-100 relative">
      <div className="max-w-6xl w-11/12 mx-auto grid gap-4 lg:grid-cols-2 items-center relative h-3/4 rounded-3xl ">
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
