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
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero/hero.jpg"
        >
          <source
            src="/media/hero/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-placeholder">
          HERO VIDEO / LIVE PHOTO
        </div>
      </div>

      <div className="hero-overlay" />

      <div className="hero-red-light" />
      <div className="hero-blue-light" />

      <div className="hero-content">
        <div className="hero-logo-container">
          <img
            className="hero-logo"
            src="/media/branding/dietro-logo.png"
            alt="Diètro"
          />

          <h1>DIÈTRO</h1>
        </div>

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