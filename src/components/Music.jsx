import { ArrowUpRight, Music2 } from "lucide-react";
import { artistData } from "../data/artistData";

function Music() {
  return (
    <>
      <section className="section music-section" id="music">
        <div className="section-header">
          <div>
            <p className="eyebrow">SELECTED RELEASES</p>
            <h2 className="huge-title">MUSIC.</h2>
          </div>

          <p className="section-intro">
            New music and selected releases will be added here.
          </p>
        </div>

        <div className="release-grid">
          {artistData.releases.map((release, index) => (
            <article className="release-card" key={index}>
              <div className="release-artwork">
                <img
                  src={release.artwork}
                  alt=""
                />

                <div className="release-placeholder">
                  <Music2 size={30} />
                  <span>RELEASE ARTWORK</span>
                </div>

                <div className="release-hover">
                  <ArrowUpRight size={25} />
                </div>
              </div>

              <div className="release-info">
                <span>0{index + 1}</span>

                <div>
                  <h3>
                    {release.title || "RELEASE TO BE ADDED"}
                  </h3>

                  {release.artists && (
                    <p>{release.artists}</p>
                  )}

                  {release.label && (
                    <small>{release.label}</small>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="numbers-section">
        <p className="eyebrow">THE NUMBERS</p>

        <div className="stats-grid">
          {artistData.stats.map((stat, index) => (
            <div className="stat" key={index}>
              <strong>{stat.value || "—"}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="numbers-note">
          UPDATED 2026 NUMBERS TO BE ADDED
        </p>
      </section>
    </>
  );
}

export default Music;