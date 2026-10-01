import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Experiences from "./sections/Experiences.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import { SmoothCursor } from "./components/SmoothCursor.jsx";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <SmoothCursor />
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
