import Wrapper from "./UI/Wrapper";
import personalImg from "../assets/comp.webp";
import { BsGithub, BsLinkedin, BsMailbox, BsWhatsapp } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const MyDetails = () => {
  const classname = "h-screen flex items-center bg-violet-200";
  const cursor = <div className="h-5 inline-block w-[0.2rem] bg-black"></div>;
  const [text] = useTypewriter({
    words: [
      "Frontend Development.",
      "State Management by Redux.",
      "React Single Page Apps.",
      "Problem Solving.",
      "Data Structures & Algorithms.",
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
      <div className="grid relative h-3/4 lg:ps-12 lg:pe-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-wider ">Hi! I am Piyush.</h1>
          <div className="mb-4">
            <span className="text-2xl ">
              <span className="text-cyan-950 block lg:inline">I like</span>{" "}
              {text}
            </span>
            <Cursor cursorColor="black" cursorStyle={cursor} />
          </div>

          <div className="text-xl italic mb-4">Front is my speciality</div>

          <div className="">
            <button
              onClick={() => scrollToSection("#contact", 3 * 11)}
              className="px-5 mt-7 rounded-md "
            >
              Recruit Me
            </button>

            <a
              href="/path/to/your/resume.pdf"
              download
              className="px-5 mt-7 rounded-md uppercase font-semibold text-white tracking-wider hover:bg-blue-950 py-3 bg-blue-800 transition ease-linear delay-50 duration-300 text-xl transform hover:-translate-y-1 hover:shadow-lg"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="">
          <img
            className="hidden lg:block scale-110"
            src={personalImg}
            alt="Portfolio"
          />
        </div>
      </div>
      <div className="lg:grid hidden grid-rows-4 absolute gap-8 shadow-md ps-5 py-5 w-16 text-cyan-950 bg-violet-100 text-2xl transition ease-linear delay-10 duration-200 transform hover:-translate-y-2 hover:shadow-lg border border-[violet]">
        <a href="https://github.com/immortalWebDev">
          <BsGithub className="text-sky-800 hover:text-orange-800" />
        </a>
        <a href="">
          <BsLinkedin className="" />
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