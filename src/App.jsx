import "./i18n/i18n";
import Navbar from "./components/Navbar";
import Home from "./modules/Home";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      {/*<Navbar >*/}
      <Home />
      {/*<Skills />*/}
      <Projects />
      {/*<Contact />*/}
    </div>
  );
}
