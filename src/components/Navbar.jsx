import { useState } from "react";

const navLinks = [
  { id: "#home", title: "home" },
  { id: "#about", title: "about" },
  { id: "#skills", title: "skills" },
  { id: "#projects", title: "projects" },
  { id: "#contact", title: "contact" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  const sidebarHandler = () => {
    setShow((prevVal) => !prevVal);
  };

  return (
    <>
      <nav>
        <div>
          <h2>My Portfolio</h2>
          <ul>
            {navLinks.map((navlink) => (
              <li key={navlink.id}>{navlink.title}</li>
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
