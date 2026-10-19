import { Play } from "lucide-react";
import { artistData } from "../data/artistData";
import AutoplayVideo from "./AutoplayVideo";

// turns a YouTube watch / share link into an embeddable one
const youTubeEmbed = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );

  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
};

function TwoFacesEvent() {
  const { details, aftermovie, poster, orientation } =
    artistData.twoFaces.event;
  const embed = aftermovie ? youTubeEmbed(aftermovie) : null;

  return (
    <div className="two-faces-event">
      <h3 className="event-heading">THE EVENT</h3>
      <p className="event-details">2 FACES · {details}</p>

      <div className={`event-video event-video-${orientation}`}>
        {embed ? (
          <iframe
            src={embed}
            title="2 FACES aftermovie"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : aftermovie ? (
          <AutoplayVideo
            src={aftermovie}
            poster={poster}
            label="2 FACES aftermovie"
            controls
          />
        ) : (
          <div
            className="event-video-placeholder"
            style={{ backgroundImage: `url("${poster}")` }}
          >
            <span className="event-video-play">
              <Play size={26} fill="currentColor" />
            </span>
            <span className="event-video-label">AFTERMOVIE COMING SOON</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoFacesEvent;
