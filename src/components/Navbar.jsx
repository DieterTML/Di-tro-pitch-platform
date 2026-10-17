import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // only show the corner logo once the big hero logo has scrolled
      // up behind the navbar
      const heroLogo = document.querySelector(".hero-logo");
      setShowLogo(
        heroLogo ? heroLogo.getBoundingClientRect().bottom < 70 : true
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <button
          className={`nav-brand ${showLogo ? "nav-brand-visible" : ""}`}
          onClick={() => scrollToSection("home")}
          tabIndex={showLogo ? 0 : -1}
          aria-label="Diètro — back to top"
        >
          <img
            className="nav-logo"
            src="/media/branding/dietro-logo.png"
            alt=""
          />
        </button>

        <nav className="desktop-nav">
          <button onClick={() => scrollToSection("about")}>WHO IS DIÈTRO?</button>
          <button onClick={() => scrollToSection("references")}>REFERENCES</button>
          <button onClick={() => scrollToSection("music")}>MUSIC</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={30} />
        </button>

        <div className="mobile-links">
          <button onClick={() => scrollToSection("about")}>WHO IS DIÈTRO?</button>
          <button onClick={() => scrollToSection("references")}>REFERENCES</button>
          <button onClick={() => scrollToSection("music")}>MUSIC</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;