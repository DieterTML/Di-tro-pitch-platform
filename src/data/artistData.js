export const artistData = {
  name: "DIÈTRO",
  role: "DJ / PRODUCER",
  country: "BELGIUM",

  colors: {
    blue: "#0076ff",
    red: "#ff001a",
  },

  // introduction under "Who is Diètro?"; the names in bioHighlights are
  // shown highlighted wherever they appear in the text
  bio: "Diètro is a Belgian DJ and music producer known for his energetic performances and versatile sound. Having performed at iconic festivals such as Tomorrowland and Rock Werchter, he continues to make his mark on the electronic music scene. His music blends commercial dance and house with the darker sounds of techno and trance. Through his unique 2 FACES concept, Diètro brings two contrasting musical worlds together under one identity.",
  bioHighlights: ["Tomorrowland", "Rock Werchter"],

  // "2 FACES": the two musical identities of Diètro. The genres match the
  // ones projected onto the face in the photo; blue is the left of the
  // face, red the right.
  twoFaces: {
    intro: "One person, two identities",
    images: {
      base: "/media/two-faces/2-faces.jpg",
      blue: "/media/two-faces/2-faces-blue.jpg",
      red: "/media/two-faces/2-faces-red.jpg",
    },
    faces: [
      {
        side: "blue",
        name: "BLUE SIDE",
        // shown when the blue face takes over
        story:
          "Step into the darker side of Diètro. A world where techno, trance and electronic sounds collide. Driven by powerful basslines, rhythms and raw underground energy.",
      },
      {
        side: "red",
        name: "RED SIDE",
        // shown when the red face takes over
        story:
          "Discover the commercial side of Diètro. Filled with melodies, uplifting rhythms and feel-good energy. A place where dance, house and pop come together.",
      },
    ],

    // the 2 FACES event. To show the aftermovie, either put the video in
    // public/media/two-faces/ and set e.g. "/media/two-faces/aftermovie.mp4",
    // or paste a YouTube link. Leave it empty to show "coming soon".
    event: {
      details: "02.05.2026 · Jeugdhuis New Gen",
      aftermovie: "/media/two-faces/aftermovie.mp4",
      poster: "/media/two-faces/aftermovie-poster.jpg",
      // "portrait" for a vertical (phone) video, "landscape" for 16:9
      orientation: "portrait",
    },
  },

  stats: [
    {
      value: "",
      label: "SPOTIFY STREAMS",
    },
    {
      value: "",
      label: "TIKTOK VIEWS",
    },
    {
      value: "",
      label: "INSTAGRAM VIEWS",
    },
  ],

  // References: each one shows a photo (image) or a looping video (video,
  // with a poster still for while it loads)
  highlights: [
    {
      year: "2026",
      title: "TOMORROWLAND",
      location: "The Great Library",
      video: "/media/references/tomorrowland.mp4",
      poster: "/media/references/tomorrowland.jpg",
    },
    {
      year: "2026",
      title: "ROCK WERCHTER",
      location: "The Towers",
      video: "/media/references/rock-werchter.mp4",
      poster: "/media/references/rock-werchter.jpg",
    },
    {
      year: "2024",
      title: "NOA BEACH CLUB",
      location: "Croatia",
      video: "/media/references/noa-beach-club.mp4",
      poster: "/media/references/noa-beach-club.jpg",
    },
  ],

  // DIÈTRO LIVE: full sets on SoundCloud. Paste the SoundCloud link of each
  // set in "url"; a set without a link is not shown.
  liveSets: [
    {
      title: "TOMORROWLAND",
      stage: "The Great Library",
      url: "https://soundcloud.com/user-172699239/dietro-tomorrowland-2026-the",
    },
    {
      title: "ROCK WERCHTER",
      stage: "The Towers",
      url: "https://soundcloud.com/user-172699239/dietro-rock-werchter-the",
    },
  ],

  releases: [
    {
      title: "",
      artists: "",
      label: "",
      artwork: "/media/releases/release-01.jpg",
      link: "",
    },
    {
      title: "",
      artists: "",
      label: "",
      artwork: "/media/releases/release-02.jpg",
      link: "",
    },
    {
      title: "",
      artists: "",
      label: "",
      artwork: "/media/releases/release-03.jpg",
      link: "",
    },
  ],

  contact: {
    email: "hello@dietromusic.com",
    phone: "+32 489 28 70 15",
    website: "www.dietromusic.com",
    instagram: "",
    spotify: "",
    tiktok: "",
  },
};