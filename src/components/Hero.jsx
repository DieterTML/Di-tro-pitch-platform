import { ArrowDown } from "lucide-react";
import { artistData } from "../data/artistData";

function Hero() {
  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <img
          className="hero-portrait"
          src="/media/hero/main-presspic-cutout.webp"
          alt="Diètro"
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-red-light" />
      <div className="hero-blue-light" />

      <div className="hero-content">
        <h1 className="visually-hidden">Diètro</h1>

        <div className="hero-meta">
          <span>{artistData.role}</span>
          <span className="hero-dot" />
          <span>{artistData.country}</span>
        </div>

        <button
          className="discover-button"
          onClick={scrollDown}
        >
          DISCOVER DIÈTRO
          <ArrowDown size={17} />
        </button>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO DISCOVER</span>
        <div />
      </div>
    </section>
  );
}

export default Hero;