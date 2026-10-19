import { ArrowUpRight } from "lucide-react";
import { artistData } from "../data/artistData";
import { playerFor } from "../utils/embeds";

function Music() {
  return (
      <section className="section music-section" id="music">
        <div className="section-index">03</div>

        <div className="section-header">
          <div>
            <p className="eyebrow">SELECTED RELEASES</p>
            <h2 className="huge-title">MUSIC.</h2>
          </div>
        </div>

        <div className="release-grid">
          {artistData.releases.map((release, index) => (
            <article className="release-card" key={release.link}>
              <div className="release-player">
                <iframe
                  title={`${release.title} by ${release.artists}`}
                  src={playerFor(release.link)}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />

                {release.support && (
                  <span className="release-support-tag">SUPPORTED</span>
                )}
              </div>

              <div className="release-info">
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <h3>{release.title}</h3>

                  {release.version && (
                    <p className="release-version">{release.version}</p>
                  )}

                  <p>{release.artists}</p>

                  <small>
                    {release.year} ·{" "}
                    <a href={release.link} target="_blank" rel="noopener noreferrer">
                      {release.platform}
                      <ArrowUpRight size={11} />
                    </a>
                  </small>
                </div>
              </div>

              {release.support && (
                <div className="release-support">
                  <span>SUPPORTED BY</span>
                  <strong>{release.support.join(" · ")}</strong>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
  );
}

export default Music;