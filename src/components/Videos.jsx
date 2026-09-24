import { Play } from "lucide-react";
import { artistData } from "../data/artistData";

function Videos() {
  return (
    <section className="section videos-section" id="videos">
      <div className="section-header">
        <div>
          <p className="eyebrow">WATCH</p>
          <h2 className="huge-title">VIDEOS.</h2>
        </div>

        <p className="section-intro">
          Live moments, social content and selected videos.
        </p>
      </div>

      <div className="video-grid">
        {artistData.videos.map((video, index) => (
          <article
            className={`video-card ${
              index === 0 ? "video-card-featured" : ""
            }`}
            key={index}
          >
            <img
              src={video.image}
              alt=""
            />

            <div className="video-placeholder">
              {index === 0
                ? "FEATURED VIDEO"
                : `VIDEO 0${index + 1}`}
            </div>

            <div className="video-overlay" />

            <div className="video-play">
              <Play
                size={21}
                fill="currentColor"
              />
            </div>

            <h3>
              {video.title || "VIDEO TO BE ADDED"}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Videos;