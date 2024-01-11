import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import SkillsDescription from "./components/Skills/SkillsDescription/SkillsDescription.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Navbar from "./components/Nav/Nav.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <SkillsDescription />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
