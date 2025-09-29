import "./i18n/i18n";
import Navbar from "./components/Navbar";
import Home from "./modules/Home";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";
import ElectronicBacground from"./components/ElectronicBacground";
import About from "./modules/About";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-transparent transition-colors duration-300">
        <ElectronicBacground />
        <div className="relative z-50">
          <Navbar />
          <div className="relative z-10">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}