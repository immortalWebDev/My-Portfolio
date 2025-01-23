import Wrapper from "./UI/Wrapper";
import { BsGithub, BsLinkedin, BsMailbox, BsWhatsapp } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const MyDetails = () => {
  const classname = "h-screen flex items-center bg-violet-200";
  const cursor = <div className="h-5 inline-block w-[0.2rem] bg-black"></div>;
  const [text] = useTypewriter({
    words: [
      "HTML, CSS & JavaScript",
      "Frontend Development",
      "Redux Toolkit",
      "React Single Page Apps",
      "Problem Solving",
      "Data Structures & Algo.",
    ],
    loop: {},
  });
  const scrollToSection = (sectionId, gap) => {
    const currentSection = document.querySelector(sectionId);
    if (currentSection) {
      const targetPosition = currentSection.offsetTop - gap;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
        typeSpeed: 30,
        deleteSpeed: 50,
        delaySpeed: 1000,
      });
    }
  };
  return (
    <Wrapper id="home" classes={classname}>
      <div className="grid relative h-3/4 lg:ps-12 lg:pe-12 rounded-3xl border border-[deepskyblue] lg:bg-white lg:grid-cols-2 place-content-center items-center max-w-6xl w-11/12 mx-auto py-6 lg:shadow-lg">
        <div className="text-center lg:text-start overflow-hidden">
          <h1 className="text-4xl lg:text-5xl mb-3 tracking-wider text-cyan-950 font-bold">
            Hi! I am Piyush.
          </h1>
          <div className="mb-4">
            <span className="text-2xl tracking-wider overflow-hidden text-orange-700 font-bold capitalize">
              <span className="text-cyan-950 block lg:inline">I am into</span>{" "}
              {text}
            </span>
            <Cursor cursorColor="black" cursorStyle={cursor} />
          </div>

          <div className="text-xl italic mb-4">
            Transforming ideas into dynamic, engaging web experiences with
            precision and creativity.
          </div>

          <div className="flex items-center space-x-2 flex-wrap justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("#contact", 4 * 16)}
              className="text-sm px-5 mt-7 rounded-md uppercase font-semibold text-white tracking-wider hover:bg-violet-950 py-3 bg-violet-800 transition ease-linear delay-50 duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact
            </button>

            <a
              href="https://www.snapit.tech/pgbadgujar007/5w3jtzcp1e"
              download
              className="text-sm px-5 mt-7 rounded-md uppercase font-semibold text-white tracking-wider hover:bg-blue-950 py-3 bg-blue-800 transition ease-linear delay-50 duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              target="_blank"
            >
              My Resume
            </a>
          </div>

          <div className="w-20 shadow-2xl hidden lg:block absolute top-0 -left-10 h-20 bg-violet-400 opacity-100 rotate-45 rounded-2xl"></div>
          <div className="w-20 hidden lg:block absolute bottom-0 -right-10 h-20 bg-blue-500 opacity-100 rotate-45 rounded-2xl"></div>
        </div>
        <div className="">
          <img
            className="hidden lg:block scale-110"
            src="https://cdn.jsdelivr.net/gh/immortalWebDev/my-cdn@c3730014d8a30677355bb9ce7c21b13afb065399/portfolio-images/comp.webp"
            alt="Portfolio"
          />
        </div>
      </div>
      <div className="lg:grid hidden grid-rows-4 absolute gap-8 shadow-md ps-5 py-5 w-16 text-cyan-950 bg-violet-100 text-2xl transition ease-linear delay-10 duration-200 transform hover:-translate-y-2 hover:shadow-lg border border-[violet]">
        <a href="https://github.com/immortalWebDev">
          <BsGithub className="text-sky-800 hover:text-orange-800" />
        </a>
        <a href="https://www.linkedin.com/in/immortalwebdev/">
          <BsLinkedin className="text-sky-800  hover:text-orange-800" />
        </a>
        <a
          href="https://wa.me/7774835449"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="text-sky-800  hover:text-orange-800" />
        </a>
        <a href="mailto:pgbadgujar007@gmail.com">
          <BsMailbox className="text-sky-800  hover:text-orange-800" />
        </a>
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
            strokeWidth="3"
            d="M0,50 Q360,0 720,50 T1440,50"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default MyDetails;
