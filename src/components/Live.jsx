import { Play } from "lucide-react";
import { artistData } from "../data/artistData";

function Live() {
  return (
    <>
      <section className="section live-section" id="live">
        <div className="section-header">
          <div>
            <p className="eyebrow">SELECTED MOMENTS</p>
            <h2 className="huge-title">LIVE.</h2>
          </div>

          <p className="section-intro">
            Selected 2026 highlights will be added here.
          </p>
        </div>

        <div className="live-grid">
          {artistData.highlights.map((show, index) => (
            <article className="live-card" key={index}>
              <img src={show.image} alt="" />

              <div className="live-placeholder">
                LIVE PHOTO {String(index + 1).padStart(2, "0")}
              </div>

              <div className="live-overlay" />

              <div className="live-info">
                <span>{show.year}</span>

                <h3>
                  {show.title || "SHOW TO BE ADDED"}
                </h3>

                {show.location && (
                  <p>{show.location}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="showreel">
        <div className="showreel-background">
          <img
            src="/media/live/showreel.jpg"
            alt=""
          />
        </div>

        <div className="showreel-overlay" />

        <button
          className="showreel-play"
          aria-label="Play Diètro live showreel"
        >
          <Play size={28} fill="currentColor" />
        </button>

        <div className="showreel-copy">
          <span>WATCH</span>
          <strong>DIÈTRO LIVE</strong>
        </div>
      </section>
    </>
  );
}

export default Live;