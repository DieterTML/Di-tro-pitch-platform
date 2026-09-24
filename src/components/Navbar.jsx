import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

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
          className="nav-brand"
          onClick={() => scrollToSection("home")}
        >
          DIÈTRO
        </button>

        <nav className="desktop-nav">
          <button onClick={() => scrollToSection("about")}>ABOUT</button>
          <button onClick={() => scrollToSection("live")}>LIVE</button>
          <button onClick={() => scrollToSection("music")}>MUSIC</button>
          <button onClick={() => scrollToSection("videos")}>VIDEOS</button>
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
          <button onClick={() => scrollToSection("about")}>ABOUT</button>
          <button onClick={() => scrollToSection("live")}>LIVE</button>
          <button onClick={() => scrollToSection("music")}>MUSIC</button>
          <button onClick={() => scrollToSection("videos")}>VIDEOS</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;