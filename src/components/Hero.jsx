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

      <div className="hero-grain" />

      <h1 className="visually-hidden">Diètro</h1>
    </section>
  );
}

export default Hero;
