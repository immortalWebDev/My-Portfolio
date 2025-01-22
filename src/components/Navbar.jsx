import { FaBars } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { useState, useEffect } from "react";

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
            <img src="https://cdn.jsdelivr.net/gh/immortalWebDev/my-cdn@c3730014d8a30677355bb9ce7c21b13afb065399/portfolio-images/portlogo.png" className="w-20" alt="logo" />
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
          <div className="md:hidden justify-self-end ">
            <FaBars
              onClick={sidebarHandler}
              className="text-2xl text-cyan-900 cursor-pointer"
            />
          </div>
        </div>
      </nav>

      <div
        className={`fixed md:hidden pt-10 mt-16 ${
          show ? `translate-x-0` : `translate-x-[-100%]`
        }  transition ease-in-out delay-400 duration-700 z-20 bg-blue-200 w-3/4 h-full`}
      >
        <ul className="grid gap-3 grid-rows-5">
          {navLinks.map((navlink) => (
            <li
              onClick={() => {
                scrollToSection(`${navlink.id}`, 4 * 16), setShow(false);
              }}
              key={navlink.id}
              className="text-xl ps-5 py-2 cursor-pointer transition ease-in-out delay-400 duration-700 hover:bg-indigo-100"
            >
              <p className="flex items-center gap-4 cursor-pointer">
                {navlink.icon}
                <span className="capitalize tracking-wider">
                  {navlink.title}
                </span>
              </p>
            </li>
          ))}
        </ul>
        <div className="absolute top-3 right-3">
          <GiCrossMark
            onClick={() => setShow(false)}
            className="text-2xl text-red-700 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
