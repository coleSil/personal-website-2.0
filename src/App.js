import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;
