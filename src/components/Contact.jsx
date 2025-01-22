import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";
import { BsMailbox2, BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper id="contact" classes="bg-violet-100 py-10 relative">
      <SectionTitle
        classes="text-center mb-5"
        title="Contact"
        icon={<FaHandshake className="text-4xl text-yellow-950" />}
      />
      <div className="max-w-6xl w-11/12 mx-auto rounded-3xl h-3/4 lg:py-10">
        <div className="max-w-2xl flex justify-center items-center p-4 mx-auto lg:w-2/5 h-[22rem] lg:h-[28rem] bg-white shadow-lg rounded-[1.5rem] border border-[deepskyblue]">
          <div className="text-center text-sm">
            <p className="capitalize tracking-wider text-2xl mb-7 font-semibold text-violet-800">
              let's connect professionally
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-7">
              <BsMailbox2 className="text-4xl text-rose-900 hover:text-violet-700 transition-colors duration-300" />
              <a
                href="mailto:pgbadgujar007@gmail.com"
                className="md:text-xl tracking-wider text-rose-900 hover:text-violet-700 transition-colors duration-300"
              >
                pgbadgujar007@gmail.com
              </a>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-7">
              <BsWhatsapp className="text-4xl text-rose-900 hover:text-violet-700 transition-colors duration-300" />
              <a
                href="https://wa.me/917774835449"
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-xl tracking-wider text-rose-900 hover:text-violet-700 transition-colors duration-300"
              >
                My WhatsApp (+91-7774835449)
              </a>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-7">
              <BsLinkedin className="text-4xl text-rose-900 hover:text-violet-700 transition-colors duration-300" />
              <a
                href="https://www.linkedin.com/in/immortalwebdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-xl tracking-wider text-rose-900 hover:text-violet-700 transition-colors duration-300"
              >
                My LinkedIn (immortalwebdev)
              </a>
              </div>
              <div className="flex items-center flex-wrap gap-2">
              <BsGithub className="text-4xl text-rose-900 hover:text-violet-700 transition-colors duration-300" />
              <a
                href="https://github.com/immortalWebDev"
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-xl tracking-wider text-rose-900 hover:text-violet-700 transition-colors duration-300"
              >
                My GitHub (immortalWebDev)
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="#ADD8E6"
            stroke="#1E90FF"
            strokeWidth="5"
            d="M0,50 Q360,0 720,50 T1440,50"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default Contact;
