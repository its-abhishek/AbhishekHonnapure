import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Experience from "./components/skills/Skills";
import Services from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  console.log(currentPath);

  const scrollToSection = (path, id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", path);
      setCurrentPath(path);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      {/* {currentPath !== "/" && currentPath !== "/home" && <Nav />} */}
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer currentPath={currentPath} scrollToSection={scrollToSection} />
    </>
  );
};

export default App;
