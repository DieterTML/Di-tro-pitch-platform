import { Mail } from "lucide-react";
import {
  InstagramIcon,
  SoundCloudIcon,
  SpotifyIcon,
  TikTokIcon,
} from "./SocialIcons";
import { artistData } from "../data/artistData";

const socialIcons = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  Spotify: SpotifyIcon,
  SoundCloud: SoundCloudIcon,
};

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-red" />
      <div className="contact-blue" />

      <div className="contact-content">
        <p className="eyebrow">
          BOOKING & CONTACT
        </p>

        <h2>CONTACT.</h2>

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
          {artistData.contact.socials.map((social) => {
            const SocialIcon = socialIcons[social.name];

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Diètro on ${social.name}`}
              >
                {SocialIcon && <SocialIcon size={18} />}
                <span>{social.name}</span>
              </a>
            );
          })}
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