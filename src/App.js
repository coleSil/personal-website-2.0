import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
