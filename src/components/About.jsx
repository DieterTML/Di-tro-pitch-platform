import { artistData } from "../data/artistData";
import TwoFaces from "./TwoFaces";
import TwoFacesEvent from "./TwoFacesEvent";

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

        {/* bio next to the key details */}
        <div className="about-copy">
          <div className="about-story">
            {artistData.bio ? (
              <p>{artistData.bio}</p>
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

          <div className="about-details">
            <div>
              <span>BASED IN</span>
              <strong>BELGIUM</strong>
            </div>

            <div>
              <span>ARTIST</span>
              <strong>DJ / PRODUCER</strong>
            </div>
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