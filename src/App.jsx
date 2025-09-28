import "./i18n/i18n";
import Navbar from "./components/Navbar";
import Home from "./modules/Home";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";
import ElectronicBacground from"./components/ElectronicBacground";
import About from "./modules/About";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <ElectronicBacground/>
      <div className="relative z-50">
        <Navbar />
        <div className="relative z-10 pb-10 lg:pb-10">
          <Home />
          <About/>
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}