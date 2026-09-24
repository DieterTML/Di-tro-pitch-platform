import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Live from "./components/Live";
import Music from "./components/Music";
import Videos from "./components/Videos";
import Contact from "./components/Contact";

import "./styles.css";

function App() {
  return (
    <div className="website">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Live />
        <Music />
        <Videos />
        <Contact />
      </main>
    </div>
  );
}

export default App;