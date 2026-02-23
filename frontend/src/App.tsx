import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Contact from "./components/Contact/Contact.tsx";
import ChatWidget from "./components/Chat/ChatWidget.tsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        Built by Adinath Pawar with React + FastAPI
      </footer>
      <ChatWidget />
    </div>
  );
}

export default App;