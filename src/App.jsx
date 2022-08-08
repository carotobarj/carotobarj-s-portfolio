import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SkillsDescription from "./components/Skills/SkillsDescription/SkillsDescription";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

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
