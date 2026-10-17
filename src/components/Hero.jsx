function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <img
          className="hero-portrait"
          src="/media/hero/main-presspic-hero.jpg"
          alt="Diètro"
        />
      </div>

      <img
        className="hero-logo"
        src="/media/branding/dietro-logo.png"
        alt=""
        aria-hidden="true"
      />

      {/* cut-out of Diètro on top of the logo, so the logo sits behind the head */}
      <img
        className="hero-portrait hero-portrait-front"
        src="/media/hero/main-presspic-front.webp"
        alt=""
        aria-hidden="true"
      />

      <div className="hero-overlay" />

      <div className="hero-red-light" />
      <div className="hero-blue-light" />

      <h1 className="visually-hidden">Diètro</h1>

      <div className="hero-scroll">
        <span>SCROLL TO DISCOVER</span>
        <div />
      </div>
    </section>
  );
}

export default Hero;