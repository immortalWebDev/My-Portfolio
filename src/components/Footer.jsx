import Wrapper from "./UI/Wrapper";
import { BsGithub, BsLinkedin, BsMailbox,BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper classes="bg-slate-700 grid place-items-center py-5 text-center">
      <div>
        <div className="grid grid-cols-4 w-52 mx-auto place-items-center mb-5 text-cyan-800 text-2xl">
          <a href="https://github.com/immortalWebDev">
            <BsGithub className="text-slate-50 hover:text-amber-500" />
          </a>
          <a href="">
            <BsLinkedin  className="text-slate-50 hover:text-amber-500"  />
          </a>
          <a href="https://wa.me/7774835449" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp  className="text-slate-50 hover:text-amber-500"  />
          </a>
          <a href="mailto:pgbadgujar007@gmail.com">
            <BsMailbox  className="text-slate-50 hover:text-amber-500"  />
          </a>
        </div>
        <p>
          Made by Piyush @ 2024 &copy; All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
