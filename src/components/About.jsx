import { artistData } from "../data/artistData";
import TwoFaces from "./TwoFaces";
import TwoFacesEvent from "./TwoFacesEvent";

// wraps the highlighted names (e.g. festivals) in the bio
const highlight = (text) => {
  const names = artistData.bioHighlights ?? [];
  if (!names.length) return text;

  const pattern = new RegExp(`(${names.join("|")})`, "g");

  return text.split(pattern).map((part, index) =>
    names.includes(part) ? (
      <strong className="about-highlight" key={index}>
        {part}
      </strong>
    ) : (
      part
    )
  );
};

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-index">01</div>

      <div className="about-header">
        {/* sits on the transition between the hero and this section */}
        <h2 className="huge-title about-title">
          WHO IS{" "}
          <img
            className="about-title-logo"
            src="/media/branding/dietro-logo.png"
            alt="Diètro"
          />
          ?
        </h2>

        {/* introduction */}
        <div className="about-copy">
          <div className="about-story">
            {artistData.bio ? (
              <p className="about-intro">{highlight(artistData.bio)}</p>
            ) : (
              <>
                <h3>NEW ARTIST STORY COMING SOON.</h3>

                <p>
                  Updated 2026 biography, career highlights and artist
                  positioning will be added here.
                </p>
              </>
            )}
          </div>
        </div>

        {/* the concept and the event, side by side */}
        <div className="about-showcase">
          <TwoFaces />
          <TwoFacesEvent />
        </div>
      </div>
    </section>
  );
}

export default About;