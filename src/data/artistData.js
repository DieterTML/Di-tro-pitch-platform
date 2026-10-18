export const artistData = {
  name: "DIÈTRO",
  role: "DJ / PRODUCER",
  country: "BELGIUM",

  colors: {
    blue: "#0076ff",
    red: "#ff001a",
  },

  bio: "",

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

  highlights: [
    {
      year: "2026",
      title: "",
      location: "",
      image: "/media/live/live-01.jpg",
    },
    {
      year: "2026",
      title: "",
      location: "",
      image: "/media/live/live-02.jpg",
    },
    {
      year: "2026",
      title: "",
      location: "",
      image: "/media/live/live-03.jpg",
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