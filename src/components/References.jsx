import { artistData } from "../data/artistData";
import AutoplayVideo from "./AutoplayVideo";

// SoundCloud's embeddable player for a track / set link
const soundCloudPlayer = (url) =>
  "https://w.soundcloud.com/player/?" +
  new URLSearchParams({
    url,
    color: "#ff001a",
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_reposts: "false",
    show_teaser: "false",
    visual: "true",
  });

function References() {
  // only sets that have a SoundCloud link are shown
  const liveSets = artistData.liveSets.filter((set) => set.url);

  return (
    <>
      <section className="section live-section" id="references">
        <div className="section-index">02</div>

        <div className="section-header">
          <div>
            <p className="eyebrow">SELECTED SHOWS & MOMENTS</p>
            <h2 className="huge-title">REFERENCES.</h2>
          </div>
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

      {/* full DJ sets on SoundCloud */}
      {liveSets.length > 0 && (
        <section className="section live-sets" aria-labelledby="live-sets-title">
          <p className="eyebrow">LISTEN BACK</p>
          <h3 className="live-sets-title" id="live-sets-title">
            DIÈTRO LIVE
          </h3>

          <div className="live-sets-grid">
            {liveSets.map((set) => (
              <article className="live-set" key={set.url}>
                <div className="live-set-heading">
                  <strong>{set.title}</strong>
                  <span>{set.stage}</span>
                </div>

                <iframe
                  title={`Diètro live at ${set.title}, ${set.stage}`}
                  src={soundCloudPlayer(set.url)}
                  allow="autoplay"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default References;