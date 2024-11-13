import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SmallProjects from "./components/SmallProjects";
import MyDetails from "./components/MyDetails";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MyDetails />
      <About />
      <Skills />
      <Projects />
      <SmallProjects/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
