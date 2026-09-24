import { Mail, Music2 } from "lucide-react";
import { artistData } from "../data/artistData";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-red" />
      <div className="contact-blue" />

      <div className="contact-content">
        <p className="eyebrow">
          BOOKING & CONTACT
        </p>

        <h2>
          LET'S MAKE
          <br />
          <span>NOISE.</span>
        </h2>

        <p className="contact-types">
          FESTIVALS · CLUBS · EVENTS
        </p>

        <a
          href={`mailto:${artistData.contact.email}`}
          className="contact-email"
        >
          <Mail size={18} />
          {artistData.contact.email}
        </a>

        <div className="socials">
          <a
            href={artistData.contact.spotify || "#"}
            aria-label="Music"
          >
            <Music2 size={20} />
          </a>
        </div>
      </div>

      <footer>
        <strong>DIÈTRO</strong>

        <span>
          DJ / PRODUCER · BELGIUM
        </span>

        <span>
          © {new Date().getFullYear()} DIÈTRO
        </span>
      </footer>
    </section>
  );
}

export default Contact;