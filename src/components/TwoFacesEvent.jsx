import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { artistData } from "../data/artistData";

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
  const videoRef = useRef(null);

  // play (muted, on a loop) only while the video is on screen
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

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
          <video
            ref={videoRef}
            controls
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
            aria-label="2 FACES aftermovie"
          >
            <source src={aftermovie} type="video/mp4" />
          </video>
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
