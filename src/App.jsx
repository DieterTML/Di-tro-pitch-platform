import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import References from "./components/References";
import Music from "./components/Music";
import Contact from "./components/Contact";

import "./styles.css";

function App() {
  return (
    <div className="website">
      <Navbar />

      <main>
        <Hero />

        <div className="section-logo" aria-hidden="true">
          <img src="/media/branding/dietro-logo.png" alt="" />
        </div>

        <About />
        <References />
        <Music />
        <Contact />
      </main>
    </div>
  );
}

export default App;