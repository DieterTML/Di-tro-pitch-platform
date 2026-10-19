// Embeddable players for Spotify and SoundCloud links

// SoundCloud's player for a track / set link
export const soundCloudPlayer = (url) =>
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

// Spotify's player for an open.spotify.com/track/... link
export const spotifyPlayer = (url) => {
  const match = url.match(/open\.spotify\.com\/(track|album|playlist)\/(\w+)/);

  return match
    ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?theme=0`
    : null;
};

// the right player for any supported link
export const playerFor = (url) =>
  url.includes("spotify.com") ? spotifyPlayer(url) : soundCloudPlayer(url);
