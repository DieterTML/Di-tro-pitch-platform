import { useEffect, useRef, useState } from "react";

// A muted, looping video that plays automatically while it is on screen
// and pauses when it scrolls out of view. If the browser blocks autoplay
// (e.g. an iPhone in Low Power Mode), the controls appear so one tap plays it.
function AutoplayVideo({ src, poster, label, controls = false, className }) {
  const videoRef = useRef(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // browsers only allow autoplay for muted videos; React doesn't always
    // apply the muted attribute, so set it on the element directly
    video.muted = true;
    video.defaultMuted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video
            .play()
            .then(() => setBlocked(false))
            .catch(() => setBlocked(true));
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      controls={controls || blocked}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default AutoplayVideo;
