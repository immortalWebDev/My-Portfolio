import { FaBars } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { useState, useEffect } from "react";
import portlogo from "../assets/portlogo.png";

const navLinks = [
  {
    id: "#home",
    title: "home",
  },
  {
    id: "#about",
    title: "about",
  },
  {
    id: "#skills",
    title: "skills",
  },
  {
    id: "#projects",
    title: "projects",
  },
  {
    id: "#contact",
    title: "contact",
  },
];
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const sidebarHandler = () => {
    setShow((preVal) => !preVal);
  };
  const scrollToSection = (sectionId, gap) => {
    const currentSection = document.querySelector(sectionId);
    if (currentSection) {
      const targetPosition = currentSection.offsetTop - gap;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollingUp(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`h-16 ${
          scrollingUp ? "bg-white shadow-xl" : "bg-transparent"
        } transition duration-150 delay-50 ease-linear fixed w-full flex align-middle z-10`}
      >
        <div className="max-w-6xl w-11/12 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={portlogo} className="w-20" alt="logo" />
            <h2 className="text-3xl font-bold text-blue-700 tracking-wider flex items-center gap-2">
              <span className="drop-shadow-md">My Portfolio</span>
            </h2>
          </div>
          <ul className="place-items-center px-3 md:flex hidden gap-10">
            {navLinks.map((navlink) => (
              <li
                key={navlink.id}
                onClick={() => scrollToSection(`${navlink.id}`, 3 * 16)}
                className="text-xl transition ease-linear delay-400 duration-300 hover:text-orange-700
             capitalize tracking-wider cursor-pointer font-semibold text-blue-950"
              >
                {navlink.title}
              </li>
            ))}
          </ul>
          <button onClick={sidebarHandler}>Menu</button>
        </div>
      </nav>

      {show && (
        <div>
          <ul>
            {navLinks.map((navlink) => (
              <li
                key={navlink.id}
                onClick={() => {
                  scrollToSection(navlink.id);
                  setShow(false);
                }}
              >
                {navlink.title}
              </li>
            ))}
          </ul>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
