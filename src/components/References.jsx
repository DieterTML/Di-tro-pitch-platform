import { Play } from "lucide-react";
import { artistData } from "../data/artistData";
import AutoplayVideo from "./AutoplayVideo";

function References() {
  return (
    <>
      <section className="section live-section" id="references">
        <div className="section-index">02</div>

        <div className="section-header">
          <div>
            <p className="eyebrow">SELECTED SHOWS & MOMENTS</p>
            <h2 className="huge-title">REFERENCES.</h2>
          </div>

          <p className="section-intro">
            A selection of the stages Diètro has played.
          </p>
        </div>

        <div className="live-grid">
          {artistData.highlights.map((show) => (
            <article className="live-card" key={show.title}>
              {show.video ? (
                <AutoplayVideo
                  className="live-media"
                  src={show.video}
                  poster={show.poster}
                  label={`Diètro at ${show.title}`}
                />
              ) : (
                <img
                  className="live-media"
                  src={show.image}
                  alt={`Diètro at ${show.title}, ${show.location}`}
                />
              )}

              <div className="live-overlay" />

              <div className="live-info">
                {show.year && <span>{show.year}</span>}

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

export default References;