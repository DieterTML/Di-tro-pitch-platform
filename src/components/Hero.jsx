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

      <div className="hero-overlay" />

      <div className="hero-red-light" />
      <div className="hero-blue-light" />

      {/* logo lit like the photo: blue on the left, red on the right */}
      <div className="hero-logo" aria-hidden="true">
        <div className="hero-logo-fill" />
      </div>

      <h1 className="visually-hidden">Diètro</h1>

      <div className="hero-scroll">
        <span>SCROLL TO DISCOVER</span>
        <div />
      </div>
    </section>
  );
}

export default Hero;