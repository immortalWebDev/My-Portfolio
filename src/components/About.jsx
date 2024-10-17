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
            Hello! I'm{" "}
            <span className="text-cyan-900 font-semibold">Piyush Badgujar</span>{" "}
            , Passionate Frontend Developer with a solid foundation in modern
            web technologies. I specialize in creating dynamic and engaging user
            experiences through my expertise in HTML, CSS, JavaScript, and
            React, along with advanced skills in routing and state management
            using Redux. I am dedicated to delivering responsive,
            high-performance websites with a focus on optimization and
            accessibility.
            <br />
            <br />
            I am seeking opportunities to leverage my skills in a collaborative
            and forward-thinking team where I can contribute meaningfully and
            continue to grow as a frontend developer.
          </p>
        </div>
        <img className="lg:block max-w-xl" src={aboutMeImg} alt="About Me" />
      </div>
    </Wrapper>
  );
};

export default About;
